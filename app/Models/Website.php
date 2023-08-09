<?php

namespace App\Models;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Website extends Model
{
	use HasFactory;
	use Translatable;

	public $translatedAttributes = [
		'header_info',
		'home_s1_title1',
		'home_s1_title2',
		'home_s2_text1',
		'home_s3_title',
		'home_s3_title1',
		'home_s3_info1',
		'home_s3_title2',
		'home_s3_info2',
		'home_s3_title3',
		'home_s3_info3',
		'about_s1_title',
		'about_s1_subtitle',
		'about_s2_title',
		'about_s2_info',
		'about_s3_title',
		'about_s3_info',
		'capital_s1_title',
		'capital_s1_subtitle',
		'capital_s2_subtitle',
		'capital_s2_title1',
		'capital_s2_title2',
		'capital_s2_info',
		'capital_s2_n1title',
		'capital_s2_n1subtitle',
		'capital_s2_n1info',
		'capital_s2_n2title',
		'capital_s2_n2subtitle',
		'capital_s2_n2info',
		'capital_s2_n3title',
		'capital_s2_n3subtitle',
		'capital_s2_n3info',
		'capital_s2_info2',
		'capital_s3_title',
		'real_s1_title',
		'real_s1_subtitle',
		'real_s2_subtitle',
		'real_s2_title1',
		'real_s2_title2',
		'real_s2_info',
		'real_s2_n1title',
		'real_s2_n1subtitle',
		'real_s2_n1info',
		'real_s2_n2title',
		'real_s2_n2subtitle',
		'real_s2_n2info',
		'real_s2_n3title',
		'real_s2_n3subtitle',
		'real_s2_n3info',
		'real_s2_info2',
		'real_s3_title',
		'hospi_s1_title',
		'hospi_s1_subtitle',
		'hospi_s2_title1',
		'hospi_s2_title2',
		'hospi_s2_info',
		'hospi_s2_info2',
		'hospi_s3_title',
	];
	protected $table = 'websites';
	protected $primaryKey = 'id';
	protected $fillable = [
		'social_in',
		'social_fb',
		'correo',
		'telefono',
		'location',
		'home_s3_bg1',
		'home_s3_bg2',
		'home_s3_bg3',
		'about_s2_bg',
		'about_s3_bg',
		'capital_video',
		'real_video',
		'hospi_video',
	];
}
