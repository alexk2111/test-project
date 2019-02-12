<?php

namespace App\Http\Controllers\Api;

use App\AutoPark;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AutoParksController extends Controller
{
    public function index()
    {
        return response()->json((AutoPark::with('driver', 'route', 'typeCar', 'typeState', 'typeStatus', 'tags', 'logs')->get()), 200);
    }

    public function destroy($id) {
        AutoPark::destroy($id);
        return response()->json(('success'), 200);
    }

    public function show($id) {
        return response()->json((AutoPark::with('driver', 'route', 'typeCar', 'typeState', 'typeStatus', 'tags', 'logs')->find($id)), 200);
    }

    public function update(Request $request, $id = null)
    {

    }

}
