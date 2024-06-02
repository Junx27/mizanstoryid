<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




Route::middleware(['guest'])->group(function () {
    Route::get('/login', [SessionController::class, "index"])->name('login');
    Route::post('/login', [SessionController::class, "login"]);
    Route::get('/', [UserController::class, "index"]);
    Route::get('/about', [UserController::class, "about"]);
    Route::get('/portofolio', [UserController::class, "portofolio"]);
    Route::get('/blog', [UserController::class, "blog"]);
    Route::get('/price', [UserController::class, "price"]);
});
Route::middleware(['auth'])->group(function () {
    Route::get('/logout', [SessionController::class, "logout"])->name('logout');
    Route::get('/dashboard', [AdminController::class, "dashboard"])->name('dashboard');
    Route::get('/galeri', [AdminController::class, "galeri"])->name("galeri");
    Route::get('/pesanan', [AdminController::class, "pesanan"])->name("pesanan");
});
