<?php

namespace App\Http\Controllers\Api;

use App\AutoPark;
use App\Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LogsController extends Controller
{
    public function show($id)
    {
        return response()->json((Log::with('autoPark', 'driver', 'route', 'typeCar', 'typeState', 'typeStatus')->where(Log::FIELD_AUTO_PARK_ID, $id)->get()), 200);
    }

    public function destroy($id)
    {
        Log::destroy($id);
        return response()->json('ok', 200);
    }

    public function clear($id)
    {
        Log::where('auto_park_id', $id)->delete();
        return response()->json('ok', 200);
    }
}
