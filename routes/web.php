<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\FotoController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoController;
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
    Route::get('/menu', [AdminController::class, "menu"])->name("menu");
    Route::get('/tambahfoto', [FotoController::class, "create"]);
    Route::put('/fotoupdate/{id}', [FotoController::class, 'update']);
    Route::get('/editfoto{id}', [FotoController::class, "show"]);
    Route::delete('/hapusfoto{id}', [FotoController::class, "destroy"]);
    Route::post('/tambahfoto', [FotoController::class, "store"]);
    Route::get('/tambahvideo', [VideoController::class, "create"]);
    Route::get('/editvideo{id}', [VideoController::class, "show"]);
    Route::get('/pesanan', [AdminController::class, "pesanan"])->name("pesanan");
});
