import AdminLayout from '@/layouts/admin-layout';

export default function Products() {
    return (
        <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Tambah Produk</button>
            <p>Tabel manajemen produk akan muncul di sini.</p>
        </div>
    );
}
Products.layout = (page: React.ReactNode) => <AdminLayout title="Manajemen Produk">{page}</AdminLayout>;