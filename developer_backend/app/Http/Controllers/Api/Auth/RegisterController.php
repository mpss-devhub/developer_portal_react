<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Mail\OtpMail;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redis;
use Illuminate\Http\JsonResponse;
use Exception;

class RegisterController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function __invoke(StoreUserRequest $request): JsonResponse
    {
        DB::beginTransaction();

        try {
            $user = User::firstOrCreate([
                'name'     => $request->name,
                'email'    => $request->email,
                'phone'    => $request->phone,
                'password' => Hash::make($request->password),
            ]);

            $email = $user->email;

            $otp = rand(100000, 999999);
            Redis::setex("otp:$email", 300, $otp);

            Mail::to($email)->send(new OtpMail($otp));

            DB::commit();

            return response()->json([
                'status_code' => 200,
                'message'     => 'User registered successfully. OTP sent to email.',
                'user'        => $user,
            ], 200);
            
        } catch (Exception $e) {
            DB::rollback();
            return response()->json([
                'status_code' => 500,
                'message'     => 'Registration failed',
                'error'       => $e->getMessage(),
            ], 500);
        }
    }
}
