<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Backend/Paket/CreatePaket");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $jumlahData = Produk::where('user_id', auth()->id())->count();
        if ($jumlahData >= 6) {
            return Inertia::location("/menu");
        }
        $validateddata = $request->validate([
            'nama_paket' => 'required',
            'nama' => 'required',
            'jumlah_baterai' => 'required',
            'jam_terbang' => 'required',
            'operator' => 'required',
            'video' => 'required',
            'output' => 'required',
            'jam_pilot' => 'required',
            'lokasi' => 'required',
            'harga' => 'required',
            'deskripsi' => 'required',
        ]);
        $validateddata["user_id"] = auth()->id();

        Produk::create($validateddata);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $paket = Produk::find($id);
        return response()->json($paket);
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
        $validateddata = $request->validate([
            'nama_paket' => 'required',
            'nama' => 'required',
            'jumlah_baterai' => 'required',
            'jam_terbang' => 'required',
            'operator' => 'required',
            'video' => 'required',
            'output' => 'required',
            'jam_pilot' => 'required',
            'lokasi' => 'required',
            'harga' => 'required',
            'deskripsi' => 'required',
        ]);
        $validateddata["user_id"] = auth()->id();

        Produk::findOrFail($id)->update($validateddata);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $paket = Produk::find($id);

        $paket->delete();
    }
}
