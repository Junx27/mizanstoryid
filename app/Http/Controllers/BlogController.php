<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BlogController extends Controller
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
        return Inertia::render("Backend/Blog/CreateBlog");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $jumlahData = Blog::where('user_id', auth()->id())->count();

        if ($jumlahData >= 200) {
            return Inertia::location("/menu");
        }
        $validateddata = $request->validate([
            'gambar' => 'file',
            'nama' => 'required',
            'deskripsi' => 'required',
        ]);
        $validateddata["user_id"] = auth()->id();
        if ($request->file('gambar')) {
            $validateddata['gambar'] = $request->file('gambar')->store('blog');
        }

        Blog::create($validateddata);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $blog = Blog::find($id);
        return response()->json($blog);
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
            $validatedData['gambar'] = $request->file('gambar')->store('blog');
        }

        Blog::findOrFail($id)->update($validatedData);
        return Inertia::location("/menu");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $blog = Blog::find($id);
        if ($blog->gambar) {
            Storage::delete($blog->gambar);
        }
        $blog->delete();
    }
}
