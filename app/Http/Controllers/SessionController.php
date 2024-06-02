<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SessionController extends Controller
{
    public function index()
    {
        return Inertia::render("Login");
    }
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return Inertia::location('/dashboard');
        } else {
            return back()->withErrors(['email' => 'Invalid credentials']);
        }
    }
    public function logout()
    {
        Auth::logout();

        return redirect('/login');
    }
}
