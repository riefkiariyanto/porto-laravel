<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name'=> 'SuperAdmin',
                'email'=> 'superadmin@gmail.com',
                'password'=>Hash::make('password'),
                'role'=> 'superadmin'
            ], [
                'name'=> 'Admin',
                'email'=> 'admin@gmail.com',
                'password'=>Hash::make('password'),
                'role'=> 'admin'
            ], [
                'name'=> 'User',
                'email'=> 'user@gmail.com',
                'password'=>Hash::make('password'),
                'role'=> 'user'
            ],
        ]);
    }
}