import { Icon } from "@iconify/react";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// Tambahkan 'useCart' di dalam impor ini
import { useCart } from '../../../context/CartContext';

// Definisikan tipe untuk sebuah objek produk
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Produk: React.FC = () => {
    // Panggil useCart() untuk mendapatkan fungsi dari context
    const { addToCart } = useCart();
    
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [addingProductId, setAddingProductId] = useState<number | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/products');
                setProducts(response.data.data as Product[]);
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data produk:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto px-4 pt-32 pb-16 flex justify-center items-center flex-col">
                <Icon
                    icon="line-md:loading-twotone-loop"
                    className="w-12 h-12 text-blue-500 mb-4"
                />
                <h1 className="text-xl">Memuat produk...</h1>
            </div>
        );
    }

    const handleAddToCart = (product: Product) => {
        setAddingProductId(product.id);
        
        setTimeout(() => {
            addToCart(product);
            setAddingProductId(null);
        }, 1000);
    };

    return (
        <div className="container mx-auto px-4 pt-32 pb-16">
            <h1 className="text-center lg:text-5xl text-3xl font-medium mb-4">Semua Produk</h1>
            <p className="text-center mb-10 text-gray-600">Temukan berbagai produk elektronik dan robotika pilihan.</p>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {products.map((item: Product) => {
                    const isAdding = addingProductId === item.id;

                    return (
                        <div key={item.id} className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-48 object-contain bg-white p-3" 
                            />
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p className="text-sm font-bold text-gray-800 mb-2">Produk Tersedia</p>
                                <p className="text-gray-700 flex-grow">{item.description}</p>
                                
                                <p className="text-2xl font-bold text-blue-600 mt-4">
                                    Rp {item.price.toLocaleString('id-ID')}
                                </p>
                                
                                <div className="mt-4 pt-4 border-t">
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        disabled={isAdding}
                                        className={`w-full font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center ${
                                            isAdding 
                                                ? 'bg-gray-400 cursor-not-allowed' 
                                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                    >
                                        {isAdding ? (
                                            <>
                                                <Icon icon="svg-spinners:180-ring" className="w-6 h-6 mr-2" />
                                                <span>Menambahkan...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Icon icon="mdi:cart-plus" className="w-6 h-6 mr-2" />
                                                <span>Tambah ke Keranjang</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Produk;