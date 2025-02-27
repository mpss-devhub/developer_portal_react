<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Illuminate\Support\Facades\Hash;


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
          $user = User::where('email', $request->email)->first();
          if (!$user || !Hash::check($request->password, $user->password)) {
              return response()->json([
                'status_code' => 400,
                  'message' => 'Invalid email or password.',
              ], 400);
          }
  
          if (!$user->email_verified_at) {
              return response()->json(['status_code' => 400,
                  'message' => 'Please verify your email before logging in.',
              ], 400);
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
