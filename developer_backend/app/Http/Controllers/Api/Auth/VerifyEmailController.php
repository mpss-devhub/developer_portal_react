<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class VerifyEmailController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum']);
    }

    public function verify(Request $request)
    {
        if (!$request->hasValidSignature()) {
            return response()->json(['status_code' => 400,'message' => 'Invalid or expired verification link.'], 400);
        }
        $email = $request->query('email');
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['status_code' => 404,'message' => 'User not found.'], 404);
        }
        $user->email_verified_at = now();
        $user->save();

        return response()->json(['status_code' => 200,'message' => 'Email successfully verified.'],200);
    }
}
