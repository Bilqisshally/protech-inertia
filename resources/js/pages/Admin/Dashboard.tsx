import AdminLayout from '@/layouts/AdminLayout';

export default function Dashboard() {
    return (
        <p>Selamat datang di dashboard admin!</p>
    );
}
Dashboard.layout = (page: React.ReactNode) => <AdminLayout title="Dashboard">{page}</AdminLayout>;