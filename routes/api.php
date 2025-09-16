<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\OrderController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::get('/products', [ProductController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/orders', [OrderController::class, 'store']);