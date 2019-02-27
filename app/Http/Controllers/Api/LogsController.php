<?php

namespace App\Http\Controllers\Api;

use App\Log;
use App\Http\Controllers\Controller;

class LogsController extends Controller
{
    public function show($id)
    {
        return response()->json((Log::with('autoPark', 'driver', 'route', 'typeCar', 'typeState', 'typeStatus')
            ->orderBy(Log::FIELD_ID)
            ->where(Log::FIELD_AUTO_PARK_ID, $id)
            ->get()),
            200
        );
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
