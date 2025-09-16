import { Icon } from '@iconify/react';
import axios from 'axios';
import React, { useState } from 'react';

// 1. Definisikan tipe untuk objek form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Kontak: React.FC = () => { // 2. Tambahkan tipe React.FC
    // 3. Terapkan tipe pada state
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // 4. Beri tipe pada event handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus('Mengirim...');
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/contact', formData);
            setStatus(response.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('Terjadi kesalahan. Silakan coba lagi.');
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Judul Halaman */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">Hubungi Kami</h1>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Kami senang mendengar dari Anda! Baik itu pertanyaan tentang produk maupun proposal kerjasama, jangan ragu untuk menghubungi kami. Jika pertanyaan Anda terkait pesanan yang sudah dibuat, mohon sertakan nomor pesanan Anda untuk mempercepat proses. Tim kami akan merespons pesan Anda dalam 1x24 jam kerja.
                    </p>
                </div>

                {/* Card Utama */}
                <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
                    
                    {/* Bagian Kiri: Informasi Kontak */}
                    <div className="md:w-2/5 bg-blue-600 text-white p-8">
                        <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                        <p className="mb-8 opacity-90">
                            Kami akan merespons pesan Anda secepat mungkin. Anda juga bisa menemukan kami di sini:
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Icon icon="ic:round-phone" className="w-6 h-6 mr-4 flex-shrink-0" />
                                <span>+62 123 4567 890</span>
                            </div>
                            <div className="flex items-center">
                                <Icon icon="ic:round-mail" className="w-6 h-6 mr-4 flex-shrink-0" />
                                <span>kontak@protech.id</span>
                            </div>
                            <div className="flex items-start">
                                <Icon icon="ic:round-location-on" className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                                <span>Jl. Pahlawan No. 123, Semarang, Jawa Tengah, Indonesia</span>
                            </div>
                        </div>
                    </div>

                    {/* Bagian Kanan: Form */}
                    <div className="md:w-3/5 p-8">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Nama Lengkap</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder="John Doe" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Alamat Email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder="anda@email.com" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Pesan Anda</label>
                                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder="Tuliskan pesan Anda di sini..."></textarea>
                            </div>
                            <div className="text-left">
                                <button type="submit" disabled={loading} className="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300 w-full disabled:bg-blue-300">
                                    {loading ? <Icon icon="svg-spinners:180-ring" className="mx-auto h-6 w-6" /> : 'Kirim Pesan'}
                                </button>
                            </div>
                        </form>
                        {status && <p className="text-center mt-4 text-gray-600 font-medium">{status}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kontak;