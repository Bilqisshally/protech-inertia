<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    LandingController
};

// Rute untuk frontend/toko Anda
Route::get('/', [LandingController::class, 'index'] )
    ->name('landing');