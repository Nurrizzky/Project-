<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();


        // data azmi
        \App\Models\User::factory()->create([
            'name' => 'Azmi',
            'email' => 'azmi89017@gmail.com',
            'password' => bcrypt('password')
        ]);
    }
}
