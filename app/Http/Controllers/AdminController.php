<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function adminDashboard()
    {
        return Inertia::render('Admin/Dashboard'); 
    }
}
