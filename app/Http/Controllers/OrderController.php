<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    /**
     * Menyimpan pesanan baru ke database.
     */
    public function store(Request $request)
    {
        // 1. Validasi data yang masuk dari frontend
        $validator = Validator::make($request->all(), [
            'fullName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'address' => 'required|string',
            'city' => 'required|string|max:100',
            'postalCode' => 'required|string|max:10',
            'items' => 'required|array',
            'items.*.id' => 'required|integer',
            'items.*.name' => 'required|string',
            'items.*.price' => 'required|numeric',
            'items.*.quantity' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $validatedData = $validator->validated();

        // 2. Gunakan DB Transaction untuk memastikan semua data tersimpan atau tidak sama sekali
        try {
            DB::beginTransaction();

            // 3. Buat dan simpan data pesanan utama
            $order = Order::create([
                'order_number' => 'ORD-' . Str::upper(Str::random(10)),
                'full_name' => $validatedData['fullName'],
                'email' => $validatedData['email'],
                'phone' => $validatedData['phone'],
                'address' => $validatedData['address'],
                'city' => $validatedData['city'],
                'postal_code' => $validatedData['postalCode'],
                'subtotal' => $request->input('subtotal'),
                'shipping_cost' => $request->input('shipping_cost'),
                'total_price' => $request->input('total_price'),
                'status' => 'pending', // Status awal pesanan
            ]);

            // 4. Simpan setiap item dalam pesanan
            foreach ($validatedData['items'] as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item['id'],
                    'product_name' => $item['name'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                ]);
            }

            DB::commit();

            // TODO: Integrasi dengan Payment Gateway (Midtrans, Xendit, dll.) di sini
            // TODO: Kirim email notifikasi ke pelanggan

            // 5. Kirim respons sukses kembali ke frontend
            return response()->json([
                'success' => true,
                'message' => 'Pesanan berhasil dibuat.',
                'order' => $order
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            // Kirim respons error
            return response()->json([
                'success' => false,
                'message' => 'Terjadi kesalahan saat memproses pesanan.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}