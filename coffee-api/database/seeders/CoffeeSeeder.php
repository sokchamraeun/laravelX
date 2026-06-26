<?php

namespace Database\Seeders;

use App\Models\Coffee;
use Illuminate\Database\Seeder;

class CoffeeSeeder extends Seeder
{
    public function run(): void
    {
        Coffee::create([
            'name' => 'Espresso',
            'image' => 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400',
            'price' => 3.50,
        ]);

        Coffee::create([
            'name' => 'Cappuccino',
            'image' => 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
            'price' => 4.50,
        ]);

        Coffee::create([
            'name' => 'Latte',
            'image' => 'https://images.unsplash.com/photo-1561883088-039e53143d73?w=400',
            'price' => 4.00,
        ]);

        Coffee::create([
            'name' => 'Americano',
            'image' => 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400',
            'price' => 3.00,
        ]);

        Coffee::create([
            'name' => 'Mocha',
            'image' => 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
            'price' => 5.00,
        ]);

        Coffee::create([
            'name' => 'Cold Brew',
            'image' => 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
            'price' => 4.50,
        ]);
    }
}
