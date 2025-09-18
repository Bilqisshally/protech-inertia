import { Head, Link, usePage } from '@inertiajs/react';
import type { SharedData } from '@/types';
import config from '@/utils/config';
import { route } from 'ziggy-js';
import { login, register } from '@/routes';
import logo from '@/assets/logonav.png';

export default function Landing() {
    const { auth } = usePage<SharedData>().props;

    // conditional display variables
    const webTitle = `Admin ${config.appName}`;
    const isAuthenticated = !!auth.user;

    return (
        <>
            <Head title="Admin" />
            <div className="flex min-h-screen flex-col items-center bg-white p-6 lg:p-8">
                {/* Header Navigasi */}
                <header className="w-full max-w-6xl">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt={`${webTitle} Logo`} className="h-10 w-10" />
                            <span className="text-2xl font-bold text-gray-800">{webTitle}</span>
                        </div>
                        <div className="flex items-center justify-end gap-4">
                            {isAuthenticated ? (
                                <Link href={""} className="font-bold text-blue-600 hover:underline">
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href={login()} className="font-bold text-gray-600 hover:text-blue-600">
                                        Log in
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Konten Utama */}
                <div className="mt-10 flex w-full items-center justify-center lg:grow">
                    <main className="flex w-full max-w-6xl flex-col items-center gap-8 lg:flex-row">
                        {/* Kolom Kiri: Teks */}
                        <div className="flex-1 text-left">
                            <h1 className="mb-5 text-5xl leading-tight font-bold text-gray-900">Panel Admin {config.appName}</h1>
                            <p className="mb-7 text-xl leading-relaxed text-gray-600">
                                Selamat datang di pusat kendali website. Dari sini Anda dapat mengelola produk, melihat pesan, dan mengatur konten
                                website dengan mudah.
                            </p>
                            {auth.user ? (
                                <Link href={""} className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700">
                                    Masuk ke Dashboard
                                </Link>
                            ) : (
                                <Link href={login()} className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700">
                                    Login untuk Memulai
                                </Link>
                            )}
                        </div>
                        {/* Kolom Kanan: Ilustrasi */}
                        <div className="relative w-full flex-1">
                            <div className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center rounded-lg bg-blue-50 p-10 shadow-lg">
                                {/* TODO: Replace with actual illustration */}
                                <img src={logo} alt={`${webTitle} logo`} />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
