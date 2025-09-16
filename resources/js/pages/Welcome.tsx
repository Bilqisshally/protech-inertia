import logo from '@/assets/logonav.png';
import { Head, Link, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';

interface Props {
    auth: {
        user: { name: string; } | null;
    };
}

// Extending Inertia's PageProps
type PageProps = Props & {
    [key: string]: any;
};

// Komponen SVG Laravel, warnanya diubah menjadi biru
const LaravelLogo = () => (
    <svg
        className="w-full max-w-none text-blue-600"
        viewBox="0 0 438 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.2036 -3H0V102.197H49.5189V86.7187H17.2036V-3Z" fill="currentColor" />
        <path d="M110.256 41.6337C108.061 38.1275 104.945 35.3731 100.905 33.3681C96.8667 31.3647 92.8016 30.3618 88.7131 30.3618C83.4247 30.3618 78.5885 31.3389 74.201 33.2923C69.8111 35.2456 66.0474 37.928 62.9059 41.3333C59.7643 44.7401 57.3198 48.6726 55.5754 53.1293C53.8287 57.589 52.9572 62.274 52.9572 67.1813C52.9572 72.1925 53.8287 76.8995 55.5754 81.3069C57.3191 85.7173 59.7636 89.6241 62.9059 93.0293C66.0474 96.4361 69.8119 99.1155 74.201 101.069C78.5885 103.022 83.4247 103.999 88.7131 103.999C92.8016 103.999 96.8667 102.997 100.905 100.994C104.945 98.9911 108.061 96.2359 110.256 92.7282V102.195H126.563V32.1642H110.256V41.6337ZM108.76 75.7472C107.762 78.4531 106.366 80.8078 104.572 82.8112C102.776 84.8161 100.606 86.4183 98.0637 87.6206C95.5202 88.823 92.7004 89.4238 89.6103 89.4238C86.5178 89.4238 83.7252 88.823 81.2324 87.6206C78.7388 86.4183 76.5949 84.8161 74.7998 82.8112C73.004 80.8078 71.6319 78.4531 70.6856 75.7472C69.7356 73.0421 69.2644 70.1868 69.2644 67.1821C69.2644 64.1758 69.7356 61.3205 70.6856 58.6154C71.6319 55.9102 73.004 53.5571 74.7998 51.5522C76.5949 49.5495 78.738 47.9451 81.2324 46.7427C83.7252 45.5404 86.5178 44.9396 89.6103 44.9396C92.7012 44.9396 95.5202 45.5404 98.0637 46.7427C100.606 47.9451 102.776 49.5487 104.572 51.5522C106.367 53.5571 107.762 55.9102 108.76 58.6154C109.756 61.3205 110.256 64.1758 110.256 67.1821C110.256 70.1868 109.756 73.0421 108.76 75.7472Z" fill="currentColor" />
        <path d="M438 -3H421.694V102.197H438V-3Z" fill="currentColor" />
        <path d="M139.43 102.197H155.735V48.2834H183.712V32.1665H139.43V102.197Z" fill="currentColor" />
        <path d="M324.49 32.1665L303.995 85.794L283.498 32.1665H266.983L293.748 102.197H314.242L341.006 32.1665H324.49Z" fill="currentColor" />
        <path d="M376.571 30.3656C356.603 30.3656 340.797 46.8497 340.797 67.1828C340.797 89.6597 356.094 104 378.661 104C391.29 104 399.354 99.1488 409.206 88.5848L398.189 80.0226C398.183 80.031 389.874 90.9895 377.468 90.9895C363.048 90.9895 356.977 79.3111 356.977 73.269H411.075C413.917 50.1328 398.775 30.3656 376.571 30.3656ZM357.02 61.0967C357.145 59.7487 359.023 43.3761 376.442 43.3761C393.861 43.3761 395.978 59.7464 396.099 61.0967H357.02Z" fill="currentColor" />
    </svg>
);

export default function Welcome() {
    const { auth } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Admin ProTech.id" />
            <div className="flex min-h-screen flex-col items-center bg-white p-6 lg:p-8">
                {/* Header Navigasi */}
                <header className="w-full max-w-6xl">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="ProTech.id Logo" className="w-10 h-10" />
                            <span className="font-bold text-2xl text-gray-800">Admin ProTech.id</span>
                        </div>
                        <div className="flex items-center justify-end gap-4">
                            {auth.user ? (
                                <Link href={route('dashboard')} className="font-bold text-blue-600 hover:underline">
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('login')} className="font-bold text-gray-600 hover:text-blue-600">
                                        Log in
                                    </Link>
                                    <Link href={route('register')} className="font-bold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Konten Utama */}
                <div className="flex w-full items-center justify-center lg:grow mt-10">
                    <main className="flex w-full max-w-6xl flex-col items-center lg:flex-row gap-8">
                        {/* Kolom Kiri: Teks */}
                        <div className="flex-1 text-left">
                            <h1 className="text-5xl font-bold mb-5 leading-tight text-gray-900">
                                Panel Admin ProTech.id
                            </h1>
                            <p className="text-xl mb-7 leading-relaxed text-gray-600">
                                Selamat datang di pusat kendali website. Dari sini Anda dapat mengelola produk, melihat pesan, dan mengatur konten website dengan mudah.
                            </p>
                            {auth.user ? (
                                <Link href={route('dashboard')} className="bg-blue-600 px-6 py-3 rounded-full text-white font-bold hover:bg-blue-700">
                                    Masuk ke Dashboard
                                </Link>
                            ) : (
                                <Link href={route('login')} className="bg-blue-600 px-6 py-3 rounded-full text-white font-bold hover:bg-blue-700">
                                    Login untuk Memulai
                                </Link>
                            )}
                        </div>
                        {/* Kolom Kanan: Ilustrasi */}
                        <div className="flex-1 relative w-full">
                            <div className="relative aspect-square w-full max-w-lg mx-auto">
                                <div className="absolute inset-0 rounded-lg bg-blue-100/50"></div>
                                <div className="absolute inset-4 p-4">
                                    <LaravelLogo />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}