import AdminLayout from '@/layouts/AdminLayout';

export default function Messages() {
    return (
        <p>Daftar pesan dari pengguna akan muncul di sini.</p>
    );
}
Messages.layout = (page: React.ReactNode) => <AdminLayout title="Pesan Masuk">{page}</AdminLayout>;