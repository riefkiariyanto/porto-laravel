<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use App\Http\Controllers\Controller;

class SuperAdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('SuperAdmin/Dashboard'); 
    }
}
