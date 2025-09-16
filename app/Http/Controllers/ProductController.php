<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// Tambahkan ini untuk type hinting yang lebih baik
use Illuminate\Http\JsonResponse; 

class ProductController extends Controller
{
    /**
     * Menampilkan daftar semua produk.
     */
    public function index(): JsonResponse // <-- Ubah menjadi JsonResponse
    {
        // Siapkan data produk LENGKAP dengan harga
        $products = [
            [
                'id' => 1,
                'name' => 'Arduino Uno R3',
                'image' => asset('Produk1.jpg'),
                'description' => 'Mikrokontroler untuk mengontrol rangkaian elektronik dan menjalankan program.',
                'price' => 150000 // <-- TAMBAHKAN INI
            ],
            [
                'id' => 2,
                'name' => 'Arduino Nano',
                'image' => asset('Produk2.jpg'),
                'description' => 'Mikrokontroler ukuran kecil untuk mengontrol perangkat elektronik di ruang terbatas.',
                'price' => 125000 // <-- TAMBAHKAN INI
            ],
            [
                'id' => 3,
                'name' => 'Sensor Ultrasonik HC-SR04',
                'image' => asset('Produk3.jpg'),
                'description' => 'Mengukur jarak dengan memancarkan dan menerima gelombang ultrasonik.',
                'price' => 25000 // <-- TAMBAHKAN INI
            ],
            [
                'id' => 4,
                'name' => 'Servo motor mini SG90',
                'image' => asset('Produk4.jpg'),
                'description' => 'Menggerakkan objek pada sudut tertentu dengan presisi.',
                'price' => 30000 // <-- TAMBAHKAN INI
            ],
            [
                'id' => 5,
                'name' => 'Driver motor L298N',
                'image' => asset('Produk5.jpg'),
                'description' => 'Mengontrol arah dan kecepatan motor DC atau stepper.',
                'price' => 45000 // <-- TAMBAHKAN INI
            ],
            [
                'id' => 6,
                'name' => 'Kabel Jumper Male to Female',
                'image' => asset('Produk6.jpg'),
                'description' => 'Menghubungkan pin perangkat elektronik tanpa solder.',
                'price' => 15000 // <-- TAMBAHKAN INI
            ]
        ];

        // Struktur respons Anda sudah benar, tetapi sekarang datanya sudah lengkap
        return response()->json([
            'success' => true,
            'message' => 'List Semua Produk',
            'data'    => $products
        ]);
    }
}