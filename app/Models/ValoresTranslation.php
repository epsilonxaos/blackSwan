<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ValoresTranslation extends Model
{
	use HasFactory;

	public $timestamps = false;
	protected $table = 'valores_translations';
	protected $fillable = [
		'title',
		'info',
	];
}
