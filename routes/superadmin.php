<?php

use App\Http\Controllers\SuperAdminController;
use Illuminate\Support\Facades\Route;

Route::get('/superadmin/dashboard', [SuperAdminController::class, 'dashboard'])
    ->name('superadmin.dashboard')
    ->middleware(['auth', 'verified', 'role:superadmin']);
