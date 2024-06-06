<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userData = [
            [
                'nama' => "mizan",
                'email' => "mizan@gmail.com",
                'kontak' => "0818687857",
                'gambar' => "profile/vKMGKDQHsX4kl8N6leuD1VMxd7fxVAfzTlhVPmtV.jpg",
                "password" => "12345678",
            ],
        ];

        foreach ($userData as $key => $value) {
            User::create($value);
        }
    }
}
