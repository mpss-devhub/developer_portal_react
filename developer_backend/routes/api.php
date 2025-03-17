<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\Auth\VerifyEmailController;
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

// ----------------- Auth Routes -----------------
Route::post('login', LoginController::class);
Route::post('logout', LogoutController::class);
Route::post('register', RegisterController::class);
Route::post('email/verify', [VerifyEmailController::class, 'verify'])
    ->middleware('signed')
    ->name('verify-email');

// ----------------- Protected Routes -----------------
Route::middleware('auth:sanctum')->group(function () {

    // Get authenticated user
    Route::get('/user', fn(Request $request) => $request->user());

    // Project routes
    Route::post('/projects', [ProjectController::class, 'store']); // Create a new project
    Route::get('/projects', [ProjectController::class, 'show']);  // List all projects

    // Dashboard route (check email verification)
    Route::get('/dashboard', function (Request $request) {
        $user = $request->user();

        if (is_null($user->email_verified_at)) {
            return response()->json(['message' => 'Email address is not verified.'], 403);
        }

        return response()->json([
            'message' => 'Welcome to the dashboard',
            'user' => $user
        ]);
    });
});
