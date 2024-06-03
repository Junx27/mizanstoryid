<?php

namespace App\Http\Controllers;

use App\Models\Foto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FotoController extends Controller
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
        return Inertia::render("Backend/Foto/CreateFoto");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)

    {
        $jumlahData = Foto::where('user_id', auth()->id())->count();

        if ($jumlahData >= 20) {
            return Inertia::location("/galeri");
        }
        $validateddata = $request->validate([
            'gambar' => 'image',
            'nama' => 'required',
            'deskripsi' => 'required',
        ]);
        $validateddata["user_id"] = auth()->id();
        if ($request->file('gambar')) {
            $validateddata['gambar'] = $request->file('gambar')->store('gambar');
        }

        Foto::create($validateddata);
        return Inertia::location('/galeri');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render("Backend/Foto/EditFoto");
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
