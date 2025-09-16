import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
// Asumsi Anda sudah mendefinisikan tipe ini di file context
import { CartItem, useCart } from '../../../context/CartContext';

const Keranjang: React.FC = () => {
    // Dengan context yang sudah di-type, TypeScript otomatis tahu tipe data ini
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    // Menambahkan tipe pada parameter reduce untuk kejelasan
    const subtotal = cartItems.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);

    // Tampilan jika keranjang kosong
    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 pt-32 pb-16 text-center">
                <Icon icon="mdi:cart-off" className="mx-auto h-24 w-24 text-gray-300" />
                <h1 className="text-3xl font-bold mt-6">Keranjang Anda Kosong</h1>
                <p className="text-gray-500 mt-2 mb-8">Sepertinya Anda belum menambahkan produk apa pun.</p>
                <Link to="/produk" className="bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-600 transition">
                    Mulai Belanja
                </Link>
            </div>
        );
    }

    // Tampilan jika keranjang ada isinya
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 pt-32 pb-16">
                <h1 className="text-center lg:text-5xl text-3xl font-bold mb-10">Keranjang Belanja</h1>
                <div className="lg:flex lg:space-x-8">
                    
                    {/* Kolom Kiri: Daftar Item Keranjang */}
                    <div className="lg:w-2/3">
                        {/* Tambahkan tipe :CartItem di sini */}
                        {cartItems.map((item: CartItem) => (
                            <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow mb-4">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-contain mr-6" />
                                <div className="flex-grow">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="text-gray-600">Rp {item.price.toLocaleString('id-ID')}</p>
                                    <p className="font-semibold mt-2">Total: Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 border rounded hover:bg-gray-100">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 border rounded hover:bg-gray-100">+</button>
                                </div>
                                {/* Tombol Hapus Item */}
                                <button onClick={() => removeFromCart(item.id)} className="ml-6 text-red-500 hover:text-red-700 transition">
                                    <Icon icon="mdi:trash-can-outline" className="w-6 h-6" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Kolom Kanan: Ringkasan Pesanan */}
                    <div className="lg:w-1/3 mt-8 lg:mt-0">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-bold mb-6">Ringkasan Pesanan</h2>
                            <div className="flex justify-between mb-4 text-gray-700">
                                <span>Subtotal</span>
                                <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                            </div>
                            <div className="flex justify-between mb-4 text-gray-700">
                                <span>Ongkos Kirim (Estimasi)</span>
                                <span>Rp 15.000</span>
                            </div>
                            <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between font-bold text-xl">
                                    <span>Total</span>
                                    <span>Rp {(subtotal + 15000).toLocaleString('id-ID')}</span>
                                </div>
                            </div>
                            <Link to="/checkout" className="mt-8 block w-full bg-blue-500 text-white text-center font-bold py-3 rounded hover:bg-blue-600 transition">
                                Lanjutkan ke Pembayaran
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Keranjang;