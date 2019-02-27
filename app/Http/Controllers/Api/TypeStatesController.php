<?php

namespace App\Http\Controllers\Api;

use App\TypeState;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TypeStatesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Return all TypeState
        return response()->json((TypeState::orderBy(TypeState::FIELD_ID)->get()), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //Create new TypeState
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return response()->json((TypeState::find($id)), 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id = null)
    {
        //Update or create TypeState
        if (!$typeState = TypeState::find($id)) {
            $typeState = new TypeState();
        }
        Validator::make($request->all(), [
            TypeState::FIELD_NAME => 'required',
        ])->validate();
        $typeState->fill($request->all([
            TypeState::FIELD_NAME
        ]));
        $typeState->save();
        return response()->json(('success'), 200);;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //Delete TypeState
        TypeState::destroy($id);
        return response()->json(('success'), 200);;
    }
}
