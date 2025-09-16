import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// 1. Definisikan dan ekspor tipe data untuk produk dan item keranjang
//    Ini bisa digunakan di komponen lain juga
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

// 2. Definisikan dan ekspor tipe untuk nilai yang akan disediakan oleh Context
export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, amount: number) => void;
  clearCart: () => void;
}

// 3. Buat context dengan tipe yang sudah didefinisikan
export const CartContext = createContext<CartContextType | undefined>(undefined);

// 4. Update custom hook untuk memberikan error jika context tidak ditemukan (best practice)
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

// 5. Definisikan tipe untuk props dari Provider
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    // 6. Terapkan tipe CartItem[] pada state
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        try {
            const localData = localStorage.getItem('cartItems');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error("Gagal parsing data keranjang dari localStorage", error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // 7. Beri tipe pada parameter fungsi
    const addToCart = (product: Product) => {
        setCartItems(prevItems => {
            const exist = prevItems.find(item => item.id === product.id);
            if (exist) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: number, amount: number) => {
        setCartItems(prevItems =>
            prevItems.map(item => {
                if (item.id === productId) {
                    const newQuantity = item.quantity + amount;
                    return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
                }
                return item;
            // Menghapus item null dari array
            }).filter((item): item is CartItem => item !== null) 
        );
    };
    
    const clearCart = () => {
        setCartItems([]);
    };

    const value: CartContextType = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};