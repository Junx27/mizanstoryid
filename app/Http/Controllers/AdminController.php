<?php

namespace App\Http\Controllers;

use App\Models\Foto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render("Backend/Dashboard");
    }
    public function galeri()
    {
        $fotos = Foto::all();
        return Inertia::render("Backend/Galeri", ["fotos" => $fotos]);
    }
    public function pesanan()
    {
        return Inertia::render("Backend/Pesanan");
    }
    public function menu()
    {
        return Inertia::render("Backend/Menu");
    }
}
