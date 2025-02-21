<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Mail\EmailVerification;
use Illuminate\Support\Facades\Log;

class VerifyEmailController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum']);
    }

    public function sendMail()
    {
        $user = auth()->user();

        if (!$user) {
            return response()->json([
                'message' => 'User not authenticated.'
            ], 401);
        }
        Mail::to($user->email)->send(new EmailVerification($user->email));
        return response()->json([
            'message' => 'Email verified'
        ]);
    }
}
