import AdminLayout from '@/layouts/admin-layout';

export default function Dashboard() {
    return <p>Selamat datang di dashboard admin!</p>;
}
Dashboard.layout = (page: React.ReactNode) => <AdminLayout title="Dashboard">{page}</AdminLayout>;
