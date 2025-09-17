import { Icon } from '@iconify/react';
import React, { useState } from 'react'; // Impor React untuk tipe
import { useNavigate } from 'react-router-dom';
import { CartItem, useCart } from '../../context/CartContext';

// 1. Definisikan tipe untuk objek form data
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

const Checkout: React.FC = () => { // 2. Tambahkan tipe React.FC
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();
    
    // 3. Terapkan tipe FormData pada state
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
    });

    // 4. Terapkan tipe boolean pada state
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    // 5. Beri tipe pada event handler
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Menghitung subtotal dan total
    const subtotal = cartItems.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);
    const shippingCost = 15000;
    const total = subtotal + shippingCost;

    // 6. Beri tipe pada event handler form
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsProcessing(true);

        const orderData = {
            ...formData,
            items: cartItems,
            subtotal: subtotal,
            shipping_cost: shippingCost,
            total_price: total,
        };
        
        console.log("Mengirim data pesanan:", orderData);

        try {
            // Simulasi berhasil
            await new Promise(resolve => setTimeout(resolve, 2000));

            clearCart();
            navigate('/order-success');

        } catch (error) {
            console.error("Gagal membuat pesanan:", error);
            alert("Terjadi kesalahan saat membuat pesanan. Silakan coba lagi.");
            setIsProcessing(false);
        }
    };

    if (cartItems.length === 0 && !isProcessing) {
        return (
            <div className="container mx-auto px-4 pt-32 pb-16 text-center">
                <Icon icon="mdi:cart-off" className="mx-auto h-24 w-24 text-gray-300" />
                <h1 className="text-3xl font-bold mt-6">Keranjang Anda Kosong</h1>
                <p className="text-gray-500 mt-2">Anda tidak bisa melanjutkan ke pembayaran tanpa ada item di keranjang.</p>
            </div>
        )
    }

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 pt-32 pb-16">
                <h1 className="text-center text-4xl font-bold mb-10">Checkout</h1>
                
                <form onSubmit={handleSubmit}>
                    <div className="lg:flex lg:space-x-12">
                        {/* Kolom Kiri: Form Detail */}
                        <div className="lg:w-2/3">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold mb-4">Informasi Kontak</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" name="fullName" value={formData.fullName} placeholder="Nama Lengkap" onChange={handleInputChange} className="w-full p-2 border rounded" required />
                                    <input type="email" name="email" value={formData.email} placeholder="Alamat Email" onChange={handleInputChange} className="w-full p-2 border rounded" required />
                                    <input type="tel" name="phone" value={formData.phone} placeholder="Nomor Telepon" onChange={handleInputChange} className="w-full p-2 border rounded" required />
                                </div>
                                
                                <h2 className="text-2xl font-bold mb-4 mt-8">Alamat Pengiriman</h2>
                                <div className="space-y-4">
                                    <input type="text" name="address" value={formData.address} placeholder="Alamat Lengkap (Jalan, No. Rumah)" onChange={handleInputChange} className="w-full p-2 border rounded" required />
                                    <input type="text" name="city" value={formData.city} placeholder="Kota / Kabupaten" onChange={handleInputChange} className="w-full p-2 border rounded" required />
                                    <input type="text" name="postalCode" value={formData.postalCode} placeholder="Kode Pos" onChange={handleInputChange} className="w-full p-2 border rounded" required />
                                </div>
                            </div>
                        </div>

                        {/* Kolom Kanan: Ringkasan Pesanan */}
                        <div className="lg:w-1/3 mt-8 lg:mt-0">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold mb-6">Ringkasan Pesanan</h2>
                                {cartItems.map((item: CartItem) => ( // Beri tipe pada item
                                    <div key={item.id} className="flex justify-between items-center text-sm mb-2">
                                        <span>{item.name} x{item.quantity}</span>
                                        <span className="font-semibold">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</span>
                                    </div>
                                ))}
                                <div className="border-t pt-4 mt-4 space-y-2">
                                    <div className="flex justify-between"><span>Subtotal</span><span>Rp {subtotal.toLocaleString('id-ID')}</span></div>
                                    <div className="flex justify-between"><span>Ongkos Kirim</span><span>Rp {shippingCost.toLocaleString('id-ID')}</span></div>
                                    <div className="flex justify-between font-bold text-xl pt-2"><span>Total</span><span>Rp {total.toLocaleString('id-ID')}</span></div>
                                </div>
                                <button type="submit" disabled={isProcessing} className="mt-6 w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition disabled:bg-gray-400 flex items-center justify-center">
                                    {isProcessing ? (
                                        <>
                                            <Icon icon="svg-spinners:180-ring" className="w-6 h-6 mr-2" />
                                            <span>Memproses...</span>
                                        </>
                                    ) : (
                                        "Buat Pesanan Sekarang"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;