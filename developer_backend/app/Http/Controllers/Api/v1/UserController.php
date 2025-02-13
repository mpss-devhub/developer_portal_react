<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\V1\UserCollection;
use App\Http\Resources\V1\UserResource;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        return new UserCollection(User::paginate());
    }
    public function store(StoreUserRequest $request){
        User::create($request->validated());
        return response()->json("user created");
    }

    public function show(User $user){
        return new UserResource($user);
    }

    public function update(StoreUserRequest $request, User $user){
        $user->update($request->validated());
        return response()->json("user updated");
    }

    public function destroy(User $user){
        $user->delete();
        return response()->json("user deleted");
    }
}
