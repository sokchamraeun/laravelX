<?php

namespace App\Http\Controllers;

use App\Models\Coffee;

class CoffeeController extends Controller
{
    public function index()
    {
        return response()->json(Coffee::all());
    }
}
