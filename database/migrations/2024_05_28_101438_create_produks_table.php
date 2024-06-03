<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('produks', function (Blueprint $table) {
            $table->id();
            $table->string('nama_paket');
            $table->string('nama');
            $table->string('jumlah_baterai');
            $table->string('jam_terbang');
            $table->string('operator');
            $table->string('video');
            $table->string('output');
            $table->string('jam_pilot');
            $table->string('lokasi');
            $table->string('harga');
            $table->foreignId('user_id')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produks');
    }
};
