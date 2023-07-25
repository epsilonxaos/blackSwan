<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProyectoTranslation extends Model
{

	public $timestamps = false;
	protected $table = 'proyectos_translations';
	protected $fillable = ['title', 'subtitle', 'info'];
}
