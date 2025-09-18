<?php

// Rute Autentikasi dari Laravel (menangani logika di backend)
require __DIR__ . '/auth.php';

// Rute halaman yang memerlukan autentikasi untuk diakses
require __DIR__ . '/authenticated.php';

// Rute halaman yang dapat diakses tanpa diautentikasi
require __DIR__ . '/public.php';