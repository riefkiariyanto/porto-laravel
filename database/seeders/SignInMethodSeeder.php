<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SignInMethod;
class SignInMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SignInMethod::insert([
        ['method' => 'google', 'enabled' => false],
        ['method' => 'email', 'enabled' => true],
    ]);
    }
}
