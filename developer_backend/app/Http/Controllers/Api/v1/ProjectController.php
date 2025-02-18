<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Resources\V1\ProjectResource;
use App\Models\Project;

class ProjectController extends Controller
{
    public function store(StoreProjectRequest $request){
        $data = $request->validated();
        $data['user_id'] = auth()->id();
        Project::create($data);
        return response()->json("project created");
    }
    public function show(Project $project){
        return new ProjectResource($project);
    }
}
