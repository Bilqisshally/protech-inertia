<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Grup Rute untuk admin (hanya bisa diakses setelah login)
Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {

    Route::get('/dashboard', fn() => Inertia::render('admin/dashboard'))
        ->name('dashboard');
    Route::get('/products', fn() => Inertia::render('admin/products'))
        ->name('products');
    Route::get('/messages', fn() => Inertia::render('admin/messages'))
        ->name('messages');
    Route::get('/settings', fn() => Inertia::render('admin/settings'))
        ->name('settings');
    Route::get('/user', fn() => Inertia::render('admin/user'))
        ->name('user');
});