<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {

        // 1. Validasi input
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        // 2. Simpan ke database
        Contact::create($validated);

        // 3. Kirim response sukses
        return response()->json(['message' => 'Pesan Anda telah berhasil dikirim!'], 201);
    }
} 