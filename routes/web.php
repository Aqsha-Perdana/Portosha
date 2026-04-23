<?php

use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PortfolioController::class, 'index'])->name('portfolio');
Route::get('/project/{id}', [PortfolioController::class, 'show'])->name('project.show');
Route::inertia('/welcome', 'welcome')->name('home');
