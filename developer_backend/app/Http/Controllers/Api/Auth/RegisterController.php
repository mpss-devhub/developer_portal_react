<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }
    /**
     * Handle the incoming request.
     */
    public function __invoke(StoreUserRequest $request)
    {
        //
    }
}
