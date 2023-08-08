<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Website;

class AppController extends Controller
{
	public function documentoInicial()
	{
		$website = Website::find(1);

		$datos = [
			'website' => $website,
			'textsi18n' => $website->getTranslationsArray()
		];

		return response($datos, 200);
	}
}
