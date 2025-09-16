import GuestLayout from '@/layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { route } from 'ziggy-js';

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => () => { reset('password'); }, []);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <Head title="Log in" />
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={data.email} onChange={(e) => setData('email', e.target.value)} className="w-full border p-2 rounded mt-1" required autoFocus />
                {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" value={data.password} onChange={(e) => setData('password', e.target.value)} className="w-full border p-2 rounded mt-1" required />
                {errors.password && <div className="text-red-600 text-sm mt-1">{errors.password}</div>}
            </div>
            <div className="flex items-center justify-end mt-4">
                <Link href={route('register')} className="underline text-sm text-gray-600 hover:text-gray-900">Belum punya akun?</Link>
                <button type="submit" className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" disabled={processing}>
                    {processing ? 'Loading...' : 'Log in'}
                </button>
            </div>
        </form>
    );
}

Login.layout = (page: React.ReactNode) => <GuestLayout title="Login">{page}</GuestLayout>;