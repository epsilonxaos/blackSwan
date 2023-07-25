<?php

namespace App\Models;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model
{
	use HasFactory;
	use Translatable;

	public $translatedAttributes = ['title', 'subtitle', 'info'];
	protected $table = 'proyectos';
	protected $primaryKey = 'id';
	protected $fillable = ['cover', 'website', 'status', 'seccion'];
}
