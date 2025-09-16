import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess: React.FC = () => {
    return (
        <div className="container mx-auto px-4 pt-68 pb-16 text-center">
            <Icon icon="clarity:success-standard-solid" className="mx-auto h-24 w-24 text-green-500" />
            <h1 className="text-3xl font-bold mt-6">Pesanan Berhasil!</h1>
            <p className="text-gray-500 mt-2 mb-8">
                Terima kasih telah berbelanja. Kami akan segera memproses pesanan Anda.
            </p>
            <Link to="/produk" className="bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-600 transition">
                Kembali Belanja
            </Link>
        </div>
    );
};

export default OrderSuccess;