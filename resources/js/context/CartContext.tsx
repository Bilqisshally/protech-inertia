import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}


export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, amount: number) => void;
  clearCart: () => void;
}

// --- Context dan Custom Hook ---
export const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// --- Komponen Provider ---
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Gagal memuat data keranjang:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // --- Fungsi-fungsi Logika ---

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Jika sudah ada, tambah kuantitasnya 1
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Jika belum ada, tambahkan ke keranjang dengan kuantitas 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  const updateQuantity = (id: number, amount: number) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;
          // Jika kuantitas baru lebih dari 0, update. Jika tidak, item akan dihapus.
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter((item): item is CartItem => item !== null) // Hapus item yang null
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};