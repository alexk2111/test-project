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
        return response()->json((Log::where(Log::FIELD_AUTO_PARK_ID, $id)->get()), 200);
    }
}
