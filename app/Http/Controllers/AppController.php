<?php

namespace App\Http\Controllers;

use App\Models\Proyecto;
use App\Models\Valores;
use Illuminate\Http\Request;
use App\Models\Website;

class AppController extends Controller
{
	public function documentoInicial()
	{
		$website = Website::find(1);

		$capital = Proyecto::where([['status', '=', 1], ['seccion', '=', 'capital']])->translated()->get();
		$real = Proyecto::where([['status', '=', 1], ['seccion', '=', 'real']])->translated()->get();
		$hospitality = Proyecto::where([['status', '=', 1], ['seccion', '=', 'hospitality']])->translated()->get();
		$valores = Valores::translated()->get();

		$datos = [
			'website' => $website,
			'textsi18n' => $website->getTranslationsArray(),
			'capital' => $capital,
			'real' => $real,
			'hospitality' => $hospitality,
			'valores' => $valores
		];

		return response($datos, 200);
	}
}
