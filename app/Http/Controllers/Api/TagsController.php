<?php

namespace App\Http\Controllers\Api;

use App\AutoPark;
use App\Tag;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TagsController extends Controller
{
    public function destroy($id)
    {
        $tag = Tag::find($id);
        $auto_park_id = $tag->auto_park_id;
        Tag::destroy($id);
//        return response()->json((Tag::where('auto_park_id', $auto_park_id)->get()), 200);
        return response()->json((AutoPark::with('driver', 'route', 'typeCar', 'typeState', 'typeStatus', 'tags', 'logs')->find($auto_park_id)), 200);
    }

    public function addTag(Request $request)
    {
        $tag = new Tag();
        Validator::make($request->all(), [
            Tag::FIELD_AUTO_PARK_ID => 'required',
            Tag::FIELD_NAME =>  'required',
        ])->validate();

        $tag->fill($request->all([
            Tag::FIELD_AUTO_PARK_ID,
            Tag::FIELD_NAME
        ]));

        $tag->save();
        return response()->json((AutoPark::with('driver', 'route', 'typeCar', 'typeState', 'typeStatus', 'tags', 'logs')->find($request->auto_park_id)), 200);
    }
}
