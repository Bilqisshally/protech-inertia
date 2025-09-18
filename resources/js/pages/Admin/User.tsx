import React from 'react';
import AdminLayout from '@/layouts/admin-layout';

export default function User() {
    return (
        <p>Tabel manajemen user akan muncul di sini.</p>
    );
}
User.layout = (page: React.ReactNode) => <AdminLayout title="Manajemen User">{page}</AdminLayout>;