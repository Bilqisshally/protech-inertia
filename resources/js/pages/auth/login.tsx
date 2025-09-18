import GuestLayout from '@/layouts/guest-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useEffect } from 'react';
import {Form} from '@inertiajs/react';
import { register } from '@/routes'; 
import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => () => { reset('password'); }, []);

    return (
        <Form {...AuthenticatedSessionController.store.form()} resetOnSuccess={['password']} className="space-y-4">
            <Head title="Log in" />
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    className="mt-1 w-full rounded border p-2"
                    required
                    autoFocus
                />
                {errors.email && <div className="mt-1 text-sm text-red-600">{errors.email}</div>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    className="mt-1 w-full rounded border p-2"
                    required
                />
                {errors.password && <div className="mt-1 text-sm text-red-600">{errors.password}</div>}
            </div>
            <div className="mt-4 flex items-center justify-end">
                <Link href={register()} className="text-sm text-gray-600 underline hover:text-gray-900">
                    Belum punya akun?
                </Link>
                <button type="submit" className="ml-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" disabled={processing}>
                    {processing ? 'Loading...' : 'Log in'}
                </button>
            </div>
        </Form>
    );
}

Login.layout = (page: React.ReactNode) => <GuestLayout title="Login">{page}</GuestLayout>;