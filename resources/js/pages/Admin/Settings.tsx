import AdminLayout from '@/layouts/AdminLayout';

export default function Settings() {
    return (
        <p>Form pengaturan website akan muncul di sini.</p>
    );
}
Settings.layout = (page: React.ReactNode) => <AdminLayout title="Pengaturan">{page}</AdminLayout>;