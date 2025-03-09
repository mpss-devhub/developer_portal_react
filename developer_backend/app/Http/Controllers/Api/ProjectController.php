<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Models\Project;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function __invoke(StoreProjectRequest $request): JsonResponse
    {
        $user = Auth::user();
        $project = Project::create([
            'user_id' => $user->id,
            'pj_name' => $request->pj_name,
            'pj_type' => $request->pj_type,
        ]);

        return response()->json([
            'status_code' => 200,
            'message' => 'Project create successfully',
            'project' => $project
        ], 200);
    }
}