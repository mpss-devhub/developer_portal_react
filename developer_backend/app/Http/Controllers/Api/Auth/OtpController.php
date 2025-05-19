<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Redis;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OtpController extends Controller
{

    public function verifyOtp(Request $request)
    {
        $email = $request->input('email');
        $enteredOtp = $request->input('otp');
        $storedOtp = Redis::get("otp:$email");
        if (!$storedOtp) {
            return response()->json(['status_code' => 400, 'message' => 'OTP expired or not found'], 400);
        }
        if ($enteredOtp == $storedOtp) {
            Redis::del("otp:$email");
            DB::beginTransaction();
            try {
                $user = User::where('email', $email)->first();
                if (!$user) {
                    return response()->json(['status_code' => 404, 'message' => 'User not found']);
                }
                $user->email_verified_at = now();
                $user->save();
                DB::commit();

                $token = $user->createToken('auth_token')->plainTextToken;

                return response()->json([
                    'status_code' => 200,
                    'message' => 'Email successfully verified',
                    'data' => [
                        'access_token' => $token,
                        'token_type' => 'Bearer',
                    ]
                ], 200);

            } catch (\Exception $e) {
                DB::rollback();
                return response()->json([
                    'status_code' => 500,
                    'message'     => 'Registration failed',
                    'error'       => $e->getMessage(),
                ], 500);
            }
            return response()->json(['status_code' => 200, 'message' => 'OTP verified successfully']);
        } else {
            return response()->json(['status_code' => 400, 'message' => 'Invalid OTP']);
        }
    }
}
