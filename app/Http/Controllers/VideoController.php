<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class VideoController extends Controller
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
        return Inertia::render("Backend/Video/CreateVideo");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $jumlahData = Video::where('user_id', auth()->id())->count();

        if ($jumlahData >= 10) {
            return Inertia::location("/galeri");
        }
        $validateddata = $request->validate([
            'gambar' => 'file',
            'nama' => 'required',
            'deskripsi' => 'required',
        ]);
        $validateddata["user_id"] = auth()->id();
        if ($request->file('gambar')) {
            $validateddata['gambar'] = $request->file('gambar')->store('video');
        }

        Video::create($validateddata);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $foto = Video::find($id);
        return response()->json($foto); //
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
        $validatedData = $request->validate([
            'gambar' => 'file',
            'nama' => 'required',
            'deskripsi' => 'required',
        ]);

        if ($request->file('gambar')) {
            if ($request->gambar_lama) {
                Storage::delete($request->gambar_lama);
            }
            $validatedData['gambar'] = $request->file('gambar')->store('video');
        }

        Video::findOrFail($id)->update($validatedData);
        return Inertia::location("/galeri");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $video = Video::find($id);
        if ($video->gambar) {
            Storage::delete($video->gambar);
        }
        $video->delete();
    }
}
