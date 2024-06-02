<?php

namespace App\Http\Controllers;

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
        return Inertia::render("Backend/Galeri");
    }
    public function pesanan()
    {
        return Inertia::render("Backend/Pesanan");
    }
}
