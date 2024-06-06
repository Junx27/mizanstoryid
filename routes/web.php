<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\FotoController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\ViewerController;
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
    Route::get('/viewblog/{id}', [ViewerController::class, "blog"]);
    Route::put('/updateblogviewer/{id}', [ViewerController::class, "blogupdate"]);
    Route::get('/viewfoto/{id}', [ViewerController::class, "foto"]);
    Route::put('/updatefotoviewer/{id}', [ViewerController::class, "fotoupdate"]);
    Route::get('/viewvideo/{id}', [ViewerController::class, "video"]);
    Route::put('/updatevideoviewer/{id}', [ViewerController::class, "videoupdate"]);
    Route::post('/tambahorder', [OrderController::class, "store"]);
    Route::get('/tambahorder/{id}', [OrderController::class, "create"]);
});
Route::middleware(['auth'])->group(function () {
    Route::get('/logout', [SessionController::class, "logout"])->name('logout');
    Route::get('/dashboard', [AdminController::class, "dashboard"])->name('dashboard');
    Route::get('/galeri', [AdminController::class, "galeri"])->name("galeri");
    Route::get('/menu', [AdminController::class, "menu"])->name("menu");
    Route::get('/tambahfoto', [FotoController::class, "create"]);
    Route::post('/tambahfoto', [FotoController::class, "store"]);
    Route::put('/fotoupdate/{id}', [FotoController::class, 'update']);
    Route::get('/editfoto{id}', [FotoController::class, "show"]);
    Route::delete('/hapusfoto{id}', [FotoController::class, "destroy"]);
    Route::get('/tambahvideo', [VideoController::class, "create"]);
    Route::put('/videoupdate/{id}', [VideoController::class, "update"]);
    Route::post('/tambahvideo', [VideoController::class, "store"]);
    Route::get('/editvideo{id}', [VideoController::class, "show"]);
    Route::delete('/hapusvideo{id}', [VideoController::class, "destroy"]);
    Route::get('/tambahblog', [BlogController::class, "create"]);
    Route::put('/blogupdate/{id}', [BlogController::class, "update"]);
    Route::post('/tambahblog', [BlogController::class, "store"]);
    Route::get('/editblog{id}', [BlogController::class, "show"]);
    Route::delete('/hapusblog{id}', [BlogController::class, "destroy"]);
    Route::get('/tambahpaket', [ProdukController::class, "create"]);
    Route::put('/paketupdate/{id}', [ProdukController::class, "update"]);
    Route::post('/tambahpaket', [ProdukController::class, "store"]);
    Route::get('/editpaket{id}', [ProdukController::class, "show"]);
    Route::get('/editprofile{id}', [AdminController::class, "show"]);
    Route::put('/profileupdate/{id}', [AdminController::class, "update"]);
    Route::put('/resetpassword/{id}', [AdminController::class, "reset"]);
    Route::delete('/hapuspaket{id}', [ProdukController::class, "destroy"]);
    Route::delete('/pesanan/{id}', [OrderController::class, "destroy"]);
    Route::get('/pesanan', [AdminController::class, "pesanan"])->name("pesanan");
});
