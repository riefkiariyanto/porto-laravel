<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       DB::table('users')->insertOrIgnore([
    [
        'name'=> 'SuperAdmin',
        'email'=> 'superadmin@gmail.com',
        'password'=> Hash::make('password'),
        'role'=> 'superadmin',
        'email_verified_at' => Carbon::now(),
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'name'=> 'Admin',
        'email'=> 'admin@gmail.com',
        'password'=> Hash::make('password'),
        'role'=> 'admin',
        'email_verified_at' => Carbon::now(),
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'name'=> 'User',
        'email'=> 'user@gmail.com',
        'password'=> Hash::make('password'),
        'role'=> 'user',
        'email_verified_at' => Carbon::now(),
        'created_at' => now(),
        'updated_at' => now(),
    ],
]);
    }
}