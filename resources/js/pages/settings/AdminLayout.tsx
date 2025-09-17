import { Head, Link } from '@inertiajs/react';
import { ReactNode } from 'react';
import { route } from 'ziggy-js';
import logo from '@/assets/logonav.png';

// Definisikan tipe untuk props yang akan diterima oleh layout ini
interface Props {
    children: ReactNode;
    title: string;
} // <- jangan lupa ini

export default function AdminLayout({ children, title }: Props) {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Mengatur judul yang tampil di tab browser */}
            <Head title={title} />

            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-4 flex-shrink-0">
                <div className="text-center mb-8">
                    <Link href={route('home')}>
                        <img src={logo} alt="ProTech.id Logo" className="w-16 h-16 mx-auto" />
                    </Link>
                    <h2 className="text-xl font-bold text-blue-600 mt-2">ProTech.id Admin</h2>
                </div>
                <nav className="space-y-2">
                    <Link href={route('Dashboard')} className="block py-2 px-4 rounded hover:bg-gray-200">
                        Dashboard
                    </Link>
                    <Link href={route('Products')} className="block py-2 px-4 rounded hover:bg-gray-200">
                        Produk
                    </Link>
                    <Link href={route('Messages')} className="block py-2 px-4 rounded hover:bg-gray-200">
                        Pesan
                    </Link>
                    <Link href={route('Users')} className="block py-2 px-4 rounded hover:bg-gray-200">
                        User
                    </Link>
                    <Link href={route('Settings')} className="block py-2 px-4 rounded hover:bg-gray-200">
                        Pengaturan
                    </Link>
                </nav>
            </aside>
            
            {/* Konten Utama */}
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <header className="bg-white shadow p-4 flex justify-between items-center">
                    <h1 className="text-lg font-semibold">{title}</h1>
                    <Link 
                        href={route('logout')} 
                        method="post" 
                        as="button" 
                        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
                    >
                        Logout
                    </Link>
                </header>

                {/* Di sinilah konten dari setiap halaman (Dashboard, Products, dll.) akan ditampilkan */}
                <main className="p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
