<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Mail\EmailVerification;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\JsonResponse;

class RegisterController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Handle the incoming request.
     */
    public function __invoke(StoreUserRequest $request): JsonResponse
    {
        // Correct way to insert user data into individual columns (not JSON)
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password) // Hash the password for security
        ]);

        // Generate an authentication token
        $token = $user->createToken('auth_token')->plainTextToken;

        // Send the verification email
        Mail::to($user->email)->send(new EmailVerification($user));

        return response()->json([
            'status_code' => 200,
            'message' => 'User registered successfully',
            'access_token' => $token,
            'token_type' => 'bearer',
            'user' => $user
        ], 200);
    }
}
