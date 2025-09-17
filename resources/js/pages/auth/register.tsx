import GuestLayout from '@/layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { route } from 'ziggy-js';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => () => { reset('password', 'password_confirmation'); }, []);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <Head title="Register" />
            <div>
                <label htmlFor="name">Nama</label>
                <input id="name" type="text" name="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="w-full border p-2 rounded mt-1" required autoFocus />
                {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
            </div>
            <div className="mt-4">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={data.email} onChange={(e) => setData('email', e.target.value)} className="w-full border p-2 rounded mt-1" required />
                {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
            </div>
            <div className="mt-4">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" value={data.password} onChange={(e) => setData('password', e.target.value)} className="w-full border p-2 rounded mt-1" required />
                {errors.password && <div className="text-red-600 text-sm mt-1">{errors.password}</div>}
            </div>
            <div className="mt-4">
                <label htmlFor="password_confirmation">Konfirmasi Password</label>
                <input id="password_confirmation" type="password" name="password_confirmation" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} className="w-full border p-2 rounded mt-1" required />
                {errors.password_confirmation && <div className="text-red-600 text-sm mt-1">{errors.password_confirmation}</div>}
            </div>
            <div className="flex items-center justify-end mt-4">
                <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">Sudah punya akun?</Link>
                <button type="submit" className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" disabled={processing}>
                    {processing ? 'Loading...' : 'Register'}
                </button>
            </div>
        </form>
    );
}

Register.layout = (page: React.ReactNode) => (
  <GuestLayout title="Register">{page}</GuestLayout>
);
