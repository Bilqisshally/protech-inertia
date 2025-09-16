<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Rute untuk frontend/toko Anda
Route::get('/', function () {
    return Inertia::render('welcome'); // -> resources/js/Pages/Welcome.tsx
})->name('home');

// Rute Autentikasi dari Laravel (menangani logika di backend)
require __DIR__.'/auth.php';

// Grup Rute untuk Admin (hanya bisa diakses setelah login)
Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    
    Route::get('/Dashboard', fn() => Inertia::render('Admin/Dashboard'))->name('Dashboard');
    Route::get('/Products', fn() => Inertia::render('Admin/Products'))->name('Products');
    Route::get('/Messages', fn() => Inertia::render('Admin/Messages'))->name('Messages');
    Route::get('/Settings', fn() => Inertia::render('Admin/Settings'))->name('Settings');
    Route::get('/User', fn() => Inertia::render('Admin/User'))->name('User');

});