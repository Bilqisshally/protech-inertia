<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'order_number',
        'full_name',
        'email',
        'phone',
        'address',
        'city',
        'postal_code',
        'subtotal',
        'shipping_cost',
        'total_price',
        'status',
        'snap_token', // Tambahkan ini jika Anda akan integrasi Midtrans
    ];

    /**
     * Get all of the items for the Order
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}