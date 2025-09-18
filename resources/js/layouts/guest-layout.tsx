import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';
import config from '@/utils/config';
import logo from '@/assets/logonav.png';

interface Props {
    children: ReactNode;
    title: string;
}

export default function GuestLayout({ children, title }: Props) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Head title={title} />
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <img src={logo} alt={config.appName} className="w-32 mx-auto mb-6" />
                {children}
            </div>
        </div>
    );
}