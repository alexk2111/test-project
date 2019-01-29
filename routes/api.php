<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'drivers'], function(){
    Route::get('','Api\DriversController@index');
    Route::delete('destroy/{id}','Api\DriversController@destroy');
    Route::post('update/{id?}','Api\DriversController@update');

});