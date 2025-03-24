<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }
    /**
     * Handle the incoming request.
     */
    public function __invoke(LoginRequest $request)
    {
        Log::info($request->email);
        Log::info($request->password);
        $user01 = User::all();
        Log::info("Email", $user01->toArray());
        $user = User::where('email', $request->email)->first();
        Log::info($user);
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status_code' => 400,
                'message' => 'Invalid email or password.',
            ], 400);
        }

        if (empty($user->email_verified_at)) {
            return response()->json([
                'status_code' => 403,
                'message' => 'Please verify your email before logging in.',
            ], 403);
        }

        if ($user->email_verified_at == null || \Carbon\Carbon::parse($user->email_verified_at)->addDays(14)->lt(now())) {
            return response()->json([
                'status_code' => 403,
                'message' => 'The account is only valid for 14 days. If you want to continue using the account, please contact bd@octoverse.asia.',
            ], 403);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status_code' => '200',
            'message' => 'Login successful.',
            'data' => [
                'access_token' => $token,
                'token_type' => 'Bearer',
            ]
        ], 200);
    }
}
