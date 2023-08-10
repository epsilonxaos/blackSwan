<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class ComandosController extends Controller
{
	public function executeComands()
	{
		// Artisan::call('key:generate');
		Artisan::call('optimize:clear');
		Artisan::call('migrate:refresh', [
			'--force' => true
		]);
		Artisan::call('db:seed', [
			'--force' => true
		]);
		// Artisan::call('db:seed', [
		// 	'--class' => 'TextosSeeder',
		// 	'--force' => true
		// ]);
		// Artisan::call('db:seed', [
		// 	'--class' => 'ProyectosSeeder',
		// 	'--force' => true
		// ]);

		return 'Comandos ejecutados con exito';
	}
}
