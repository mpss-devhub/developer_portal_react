<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
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

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn(Request $request) => $request->user());
    Route::post('/projects', [ProjectController::class, 'store']);
    Route::get('/dashboard', function (Request $request) {
        $user = $request->user();

        return is_null($user->email_verified_at)
            ? response()->json(['message' => 'Email address is not verified.'], 403)
            : response()->json(['message' => 'Welcome to the dashboard', 'user' => $user]);
    });
});