<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ComandosController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProyectoController;
use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::view('/', 'app')->where('path', '.*');
Route::view('/capital', 'app')->where('path', '.*');
Route::view('/real-state', 'app')->where('path', '.*');
Route::view('/hospitality', 'app')->where('path', '.*');
Route::view('/nosotros', 'app')->where('path', '.*');
Route::view('/politicas', 'app')->where('path', '.*');

Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('guest')->prefix('/admin')->group(function () {
	Route::get('/', [AdminController::class, 'iniciarSesionView'])->name('panel.access');
	// Route::get('/', [AdminController::class, 'iniciarSesionView'])->name('panel.access');
	Route::post('/login', [AdminController::class, 'login'])->name('panel.login');
	Route::get('/register', [AdminController::class, 'registrarAdmin'])->name('panel.register');
});

Route::middleware(['auth:admin', 'verified'])->prefix('/admin')->group(function () {
	Route::post('/logout', [AdminController::class, 'logout'])->name('panel.logout');
	Route::get('/dashboard', [AdminController::class, 'dashboardAdmin'])->name('panel.dashboard');

	//Roles
	Route::prefix('/roles')->group(function () {
		Route::get('/', [RoleController::class, 'index'])->name('panel.roles.index');
		Route::get('/nuevo', [RoleController::class, 'create'])->name('panel.roles.create');
		Route::get('/editar/{id}', [RoleController::class, 'edit'])->name('panel.roles.edit');
		Route::post('/store', [RoleController::class, 'store'])->name('panel.roles.store');
		Route::put('/update/{id}', [RoleController::class, 'update'])->name('panel.roles.update');
		Route::delete('/destroy/{id}', [RoleController::class, 'destroy'])->name('panel.roles.destroy');
	});


	Route::prefix('/perfil')->group(function () {
		Route::get('/', [AdminController::class, 'editProfile'])->name('panel.profile.edit');
		Route::patch('/update', [AdminController::class, 'updateProfile'])->name('panel.profile.update');
		Route::put('/update/password', [AdminController::class, 'updateProfilePassword'])->name('panel.profile.update.password');
		Route::delete('/destroy', [AdminController::class, 'destroyProfile'])->name('panel.profile.destroy');
	});

	Route::prefix('/usuarios')->group(function () {
		Route::get('/', [AdminController::class, 'index'])->name('panel.usuarios.index');
		Route::get('/create', [AdminController::class, 'create'])->name('panel.usuarios.create');
		Route::post('/store', [AdminController::class, 'store'])->name('panel.usuarios.store');
		Route::get('/edit/{id?}', [AdminController::class, 'editProfileId'])->name('panel.usuarios.edit');
		Route::patch('/update/{id?}', [AdminController::class, 'updateProfile'])->name('panel.usuarios.update');
		Route::put('/update/{id?}/password', [AdminController::class, 'updateProfilePassword'])->name('panel.usuarios.update.password');
		Route::delete('/destroy/{id?}', [AdminController::class, 'destroyProfile'])->name('panel.usuarios.destroy');
	});

	// Proyectos
	Route::prefix('/proyectos')->group(function () {
		Route::get('{seccion}/', [ProyectoController::class, 'index'])->name('panel.proyectos.index');
		Route::get('{seccion}/create', [ProyectoController::class, 'create'])->name('panel.proyectos.create');
		Route::post('{seccion}/store', [ProyectoController::class, 'store'])->name('panel.proyectos.store');
		Route::get('{seccion}/edit/{id}', [ProyectoController::class, 'edit'])->name('panel.proyectos.edit');
		Route::put('{seccion}/update/{id}', [ProyectoController::class, 'update'])->name('panel.proyectos.update');
		Route::delete('/destroy/{id}', [ProyectoController::class, 'destroy'])->name('panel.proyectos.destroy');
		Route::post('/change/status', [ProyectoController::class, 'changeStatus'])->name('panel.proyectos.changeStatus');
	});
});

require __DIR__ . '/auth.php';
