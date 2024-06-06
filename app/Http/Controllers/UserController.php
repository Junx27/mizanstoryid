<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Foto;
use App\Models\Produk;
use App\Models\User;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Laravel\Prompts\select;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        $produks = Produk::all();
        return Inertia::render("Frontend/Home", ['users' => $users, "produks" => $produks]);
    }
    public function about()
    {

        $user = User::select('nama', "email", "kontak", "gambar")->where("id", 1)->get();
        return Inertia::render("Frontend/About", ["user" => $user]);
    }
    public function portofolio()
    {
        $videos = Video::all();
        $fotos = Foto::all();
        return Inertia::render("Frontend/Portofolio", ["videos" => $videos, "fotos" => $fotos]);
    }
    public function blog()
    {
        $blogs = Blog::with('user:id,nama')->get();
        return Inertia::render("Frontend/Blog", ["blogs" => $blogs]);
    }
    public function price()
    {
        $aerial = Produk::where("nama_paket", "AERIAL")->orderByRaw("CASE 
                                   WHEN nama = 'PAKET BRONZE' THEN 1
                                   WHEN nama = 'PAKET SILVER' THEN 2
                                   WHEN nama = 'GOLD' THEN 3
                                   ELSE 4
                               END")
            ->get();
        $fpv = Produk::where("nama_paket", "FPV")->orderByRaw("CASE 
                                   WHEN nama = 'PAKET BRONZE' THEN 1
                                   WHEN nama = 'PAKET SILVER' THEN 2
                                   WHEN nama = 'GOLD' THEN 3
                                   ELSE 4
                               END")
            ->get();
        return Inertia::render("Frontend/Price", ["aerial" => $aerial, "fpv" => $fpv]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
