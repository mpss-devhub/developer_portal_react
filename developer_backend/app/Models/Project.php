<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'pj_name',
        'type',
        'user_id',
    ];
    protected $dates = ['deleted_at']; 
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
