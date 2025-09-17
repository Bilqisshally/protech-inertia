import React, { ReactNode } from 'react';
import { Link, Head } from '@inertiajs/react';
import logo from '@/assets/logonav.png'; // Pastikan path ini benar

interface Props {
    children: ReactNode;
    title: string;
}

export default function GuestLayout({ children, title }: Props) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white">
            <Head title={title} />
            <div>
                <Link href="/">
                    <img src={logo} alt="ProTech.id Logo" className="w-24 h-24" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-8 bg-gray-50 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}