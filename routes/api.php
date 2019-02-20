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

Route::group(['prefix' => 'auth'],function () {
    Route::post('login', 'Api\AuthController@login');
    Route::post('check', 'Api\AuthController@check');
});

Route::group(['prefix' => 'drivers'], function(){
    Route::get('','Api\DriversController@index');
    Route::get('show/{id}','Api\DriversController@show');
    Route::delete('destroy/{id}','Api\DriversController@destroy');
    Route::post('update/{id?}','Api\DriversController@update');
});

Route::group(['prefix' => 'routes'], function(){
    Route::get('','Api\RoutesController@index');
    Route::get('show/{id}','Api\RoutesController@show');
    Route::delete('destroy/{id}','Api\RoutesController@destroy');
    Route::post('update/{id?}','Api\RoutesController@update');
});

Route::group(['prefix' => 'type-cars'], function(){
    Route::get('','Api\TypeCarsController@index');
    Route::get('show/{id}','Api\TypeCarsController@show');
    Route::delete('destroy/{id}','Api\TypeCarsController@destroy');
    Route::post('update/{id?}','Api\TypeCarsController@update');
});

Route::group(['prefix' => 'type-states'], function(){
    Route::get('','Api\TypeStatesController@index');
    Route::get('show/{id}','Api\TypeStatesController@show');
    Route::delete('destroy/{id}','Api\TypeStatesController@destroy');
    Route::post('update/{id?}','Api\TypeStatesController@update');
});

Route::group(['prefix' => 'type-statuses'], function(){
    Route::get('','Api\TypeStatusesController@index');
    Route::get('show/{id}','Api\TypeStatusesController@show');
    Route::delete('destroy/{id}','Api\TypeStatusesController@destroy');
    Route::post('update/{id?}','Api\TypeStatusesController@update');
});

Route::group(['prefix' => 'log'], function(){
    Route::get('show/{id}','Api\LogsController@show');
});

Route::group(['prefix' => 'auto-parks'], function(){
    Route::get('','Api\AutoParksController@index');
    Route::get('show/{id}','Api\AutoParksController@show');
    Route::delete('destroy/{id}','Api\AutoParksController@destroy');
    Route::post('update/{id?}','Api\AutoParksController@update');
});

Route::group(['prefix' => 'tags'], function(){
    Route::post('destroy/{id}','Api\TagsController@destroy');
    Route::post('add-tag','Api\TagsController@addTag');
});
