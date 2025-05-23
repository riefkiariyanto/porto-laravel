<?php

use App\Http\Controllers\SuperAdminController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'role:superadmin'])->prefix('superadmin')->name('superadmin.')->group(function () {
    Route::get('/dashboard', [SuperAdminController::class, 'dashboard'])->name('dashboard');

    Route::get('/sign-methods', [SuperAdminController::class, 'signMethods'])->name('sign-methods');
    Route::patch('/sign-methods/{signMethod}', [SuperAdminController::class, 'updateSignMethod'])->name('sign-methods.update');

    Route::delete('/users/{id}', [SuperAdminController::class, 'destroy'])->name('users.destroy');
    Route::patch('/users/{user}', [SuperAdminController::class, 'update'])->name('users.update');
});
