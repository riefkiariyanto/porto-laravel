<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SignInMethod extends Model
{
    protected $fillable = ['method', 'enabled']; // sesuaikan dengan kolom database

}
