<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foto extends Model
{
    use HasFactory;
    protected $fillable = [
        'gambar',
        'nama',
        'deskripsi',
        'viewer',
        "user_id",
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
