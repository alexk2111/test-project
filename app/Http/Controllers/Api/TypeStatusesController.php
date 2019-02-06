<?php

namespace App\Http\Controllers\Api;

use App\TypeStatus;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TypeStatusesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Return all TypeStatus
        return response()->json((TypeStatus::get()), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //Create new TypeStatus
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
        return response()->json((TypeStatus::find($id)), 200);
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
        //Update or create TypeStatus
        if (!$typeStatus = TypeStatus::find($id)) {
            $typeStatus = new TypeStatus();
        }
        Validator::make($request->all(), [
            TypeStatus::FIELD_NAME => 'required',
        ])->validate();
        $typeStatus->fill($request->all([
            TypeStatus::FIELD_NAME
        ]));
        $typeStatus->save();
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
        //Delete TypeStatus
        TypeStatus::destroy($id);
        return response()->json(('success'), 200);;
    }
}
