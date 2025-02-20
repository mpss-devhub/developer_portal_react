<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\EmailVerification;

class VerifyEmailController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum']);
    }

    public function sendMail()
    {
        // Mail::to(auth()->user())->send(new EmailVerification(auth()->user()));
        $user = auth()->user();

        if (!$user) {
            return response()->json([
                'message' => 'User not authenticated.'
            ], 401); // 401 Unauthorized
        }

        // Send the verification email to the authenticated user
        Mail::to($user)->send(new EmailVerification($user));


        return response()->json([
            'message' => 'Email verified'
        ]);
    }
}
