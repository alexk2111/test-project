<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AuthController extends Controller
{


    public function login(Request $request)
    {
        try {
            $user = User::where(User::FIELD_EMAIL, request(User::FIELD_EMAIL))
                ->where(User::FIELD_PASSWORD, request(User::FIELD_PASSWORD))
                ->firstOrFail();
        } catch (ModelNotFoundException $e) {
            return response()->json(["Login" => "Bad login or password"], 400);
        }

        $token = Str::random(32);
        $user->remember_token = $token;
        $user->save();

        return response()->json([$token]);
    }

    public function check(Request $request)
    {
        try {
            $user = User::where(User::FIELD_REMEMBER_TOKEN, $request->token)
                ->firstOrFail();
        } catch (ModelNotFoundException $e) {
            return response()->json(["Bad token"], 400);
        }
        return response()->json(["Ok"], 200);
    }
}