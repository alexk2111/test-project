<?php

namespace App\Http\Controllers\Api;

use App\TypeCar;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TypeCarsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Return all TypeCar
        return response()->json((TypeCar::orderBy(TypeCar::FIELD_ID)->get()), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //Create new TypeCar
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
        return response()->json((TypeCar::find($id)), 200);
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
        //Update or create TypeCar
        if (!$typeCar = TypeCar::find($id)) {
            $typeCar = new TypeCar();
        }
        Validator::make($request->all(), [
            TypeCar::FIELD_NAME => 'required',
        ])->validate();
        $typeCar->fill($request->all([
            TypeCar::FIELD_NAME
        ]));
        $typeCar->save();
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
        //Delete TypeCar
        TypeCar::destroy($id);
        return response()->json(('success'), 200);;
    }
}
