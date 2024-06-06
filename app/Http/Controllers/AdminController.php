<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Foto;
use App\Models\Pesanan;
use App\Models\Produk;
use App\Models\User;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function show(string $id)
    {
        $user = User::find($id);
        return response()->json($user);
    }
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'gambar' => 'file',
            'nama' => 'required',
            'email' => 'required',
            'kontak' => 'required',
        ]);

        if ($request->file('gambar')) {
            if ($request->gambar_lama) {
                Storage::delete($request->gambar_lama);
            }
            $validatedData['gambar'] = $request->file('gambar')->store('profile_sementara');
        }

        User::findOrFail($id)->update($validatedData);
        return Inertia::location("/dashboard");
    }
    public function reset(Request $request, string $id)
    {
        $validatedData = $request->validate([

            'password' => 'required',
        ]);
        User::findOrFail($id)->update($validatedData);
        Auth::logout();
        return Inertia::location("/login");
    }
    public function dashboard()
    {
        $user = User::find(auth()->id());
        $fotos = Foto::all();
        $videos = Video::all();
        $produks = Produk::all();
        $blogs = Blog::all();
        $orders = Pesanan::all();
        return Inertia::render("Backend/Dashboard", ["user" => $user, "fotos" => $fotos, "videos" => $videos, "produks" => $produks, "blogs" => $blogs, "orders" => $orders]);
    }
    public function galeri()
    {
        $fotos = Foto::all();
        $videos = Video::all();
        return Inertia::render("Backend/Galeri", ["fotos" => $fotos, "videos" => $videos]);
    }
    public function pesanan()
    {
        $pesanans = Pesanan::all();
        return Inertia::render("Backend/Pesanan", ["pesanans" => $pesanans]);
    }
    public function menu()
    {
        $blogs = Blog::with('user')->get();
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
        return Inertia::render("Backend/Menu", ["blogs" => $blogs, "aerial" => $aerial, "fpv" => $fpv]);
    }
}
