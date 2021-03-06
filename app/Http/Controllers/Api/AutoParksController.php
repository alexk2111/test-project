<?php

namespace App\Http\Controllers\Api;

use App\AutoPark;
use App\Log;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class AutoParksController extends Controller
{
    public function index()
    {
        return response()->json((AutoPark::with('driver', 'route', 'typeCar', 'typeState', 'typeStatus', 'tags', 'logs')
            ->orderBy(AutoPark::FIELD_ID)
            ->get()),
            200
        );
    }

    public function destroy($id)
    {
        AutoPark::destroy($id);
        return response()->json(('success'), 200);
    }

    public function show($id)
    {
        return response()->json((AutoPark::with('driver', 'route', 'typeCar', 'typeState', 'typeStatus', 'tags', 'logs')->find($id)), 200);
    }

    public function update(Request $request, $id = null)
    {
        if (!$autoPark = AutoPark::find($id)) {
            $autoPark = new AutoPark;
        } else {
            if ($log = Log::where('auto_park_id', $id)->where('finish_date', null)->first()) {
                $log->finish_date = Carbon::now('UTC');
                $log->save();
            }
        }

        Validator::make($request->all(), [
            AutoPark::FIELD_NAME => 'required',
            AutoPark::FIELD_DRIVER_ID => 'required',
            AutoPark::FIELD_ROUTE_ID => 'required',
            AutoPark::FIELD_TYPE_CAR_ID => 'required',
            AutoPark::FIELD_TYPE_STATE_ID => 'required',
            AutoPark::FIELD_TYPE_STATUS_ID => 'required',
        ])->validate();

        $autoPark->fill($request->all([
            AutoPark::FIELD_NAME,
            AutoPark::FIELD_DRIVER_ID,
            AutoPark::FIELD_ROUTE_ID,
            AutoPark::FIELD_TYPE_CAR_ID,
            AutoPark::FIELD_TYPE_STATE_ID,
            AutoPark::FIELD_TYPE_STATUS_ID,
            AutoPark::FIELD_AGE,
        ]));

        if ($autoPark->save()) {
            $log = new Log;
            $log->auto_park_id = $autoPark->id;
            $log->driver_id = $autoPark->driver_id;
            $log->route_id = $autoPark->route_id;
            $log->type_car_id = $autoPark->type_car_id;
            $log->type_state_id = $autoPark->type_state_id;
            $log->type_status_id = $autoPark->type_status_id;
            $log->start_date = Carbon::now('UTC');
            $log->save();

            return response()->json(('success'), 200);
        }
        return response()->json(('error'), 400);;
    }

}
