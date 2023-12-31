<?php

namespace App\Models;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Valores extends Model
{
	use HasFactory;
	use Translatable;

	public $translatedAttributes = [
		'title',
		'info'
	];
	protected $table = 'valores';
	protected $primaryKey = 'id';
}
