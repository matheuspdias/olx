<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\CategoryController;

Route::get('/ping', function() {
    return ['pong'=>true];
});

Route::get('/401', [AuthController::class, 'unauthorized'])->name('login');

// ROTAS DE AUTENTICAÇÃO E CRIAÇÃO DE USUARIOS
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/logout', [AuthController::class, 'logout']);
Route::post('/auth/refresh', [AuthController::class, 'refresh']);
Route::post('/user', [AuthController::class, 'create']);

// ROTAS DO PERFIL DO USUARIO (LER E ALTERAR)
Route::get('/user', [UserController::class, 'read']);
Route::post('/user/avatar', [UserController::class, 'updateAvatar']);
Route::put('/user', [UserController::class, 'update']);

// ROTAS DE ANUNCIOS
Route::get('/announcements', [AnnouncementController::class, 'list']);
Route::get('/announcements/{id_user}', [AnnouncementController::class, 'mylist']);
Route::get('/announcement/{id}', [AnnouncementController::class, 'one']);
Route::post('/announcement', [AnnouncementController::class, 'create']);

// ROTAS DE CATEGORIAS
Route::post('/category', [CategoryController::class, 'create']);
Route::get('/categories', [CategoryController::class, 'getCategories']);

// ROTA DE BUSCA DE ANUNCIOS
Route::get('/search', [AnnouncementController::class, 'search']);