<?php

use App\Http\Controllers\CoffeeController;
use Illuminate\Support\Facades\Route;

Route::get('/coffees', [CoffeeController::class, 'index']);
