<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user',function(Request $request){
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/dashboard', function (Request $request) {
    $user = $request->user();

    if (is_null($user->email_verified_at)) {
        return response()->json([
            'message' => 'Email address is not verified.',
        ], 403);
    }

    return response()->json([
        'message' => 'Welcome to the dashboard',
        'user' => $user
    ]);
});