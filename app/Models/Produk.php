<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    use HasFactory;
    protected $fillable = [
        'nama_paket',
        'nama',
        'jumlah_baterai',
        'jam_terbang',
        'operator',
        'video',
        'output',
        'jam_pilot',
        'lokasi',
        'harga',
        'deskripsi',
        "user_id",
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
