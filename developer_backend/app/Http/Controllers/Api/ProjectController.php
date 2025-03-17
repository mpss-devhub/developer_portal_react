<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Models\Project;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function store(StoreProjectRequest $request): JsonResponse
    {
        $project = Project::create([
            'user_id' => $request->user()->id,
            'pj_name' => $request->pj_name,
            'pj_type' => $request->type,
        ]);

        return response()->json([
            'status_code' => 200,
            'message' => 'Project create successfully',
            'project' => $project
        ], 200);
    }

    public function show(Request $request)
    {
        $projects = Project::where('user_id', $request->user()->id)->get();
        return response()->json([
            'status_code' => 200,
            'message' => 'Project fetch successfully',
            'projects' => $projects
        ], 200);
    }
}
