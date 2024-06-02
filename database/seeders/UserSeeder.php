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
                'name' => "mizan",
                'email' => "mizan@gmail.com",
                "password" => "12345678",
            ],
        ];

        foreach ($userData as $key => $value) {
            User::create($value);
        }
    }
}
