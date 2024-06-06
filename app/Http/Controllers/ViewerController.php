<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Foto;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ViewerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function blog(String $id)
    {
        $blog = Blog::find($id);
        return response()->json($blog);
    }
    public function blogupdate(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'viewer' => 'required',
        ]);

        Blog::findOrFail($id)->update($validatedData);
        return Inertia::location("/blog");
    }
    public function foto(String $id)
    {
        $foto = Foto::find($id);
        return response()->json($foto);
    }
    public function fotoupdate(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'viewer' => 'required',
        ]);

        Foto::findOrFail($id)->update($validatedData);
        return Inertia::location("/portofolio");
    }
    public function video(String $id)
    {
        $video = Video::find($id);
        return response()->json($video);
    }
    public function videoupdate(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'viewer' => 'required',
        ]);

        Video::findOrFail($id)->update($validatedData);
        return Inertia::location("/portofolio");
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
