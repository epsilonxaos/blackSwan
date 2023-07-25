<?php

namespace App\Http\Controllers;

use App\Models\Proyecto;
use Illuminate\Http\Request;

class ProyectoController extends Controller
{

	public $locales = ['es', 'en'];
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{

		$p = Proyecto::create([
			'seccion' => 'capital'
		]);

		foreach ($this->locales as $locale) {
			$p->translateOrNew($locale)->title = "Title {$locale}";
			$p->translateOrNew($locale)->subtitle = "Subtitle {$locale}";
			$p->translateOrNew($locale)->info = "Info {$locale}";
		}

		$p->save();

		echo 'Datos ingresados';
		// try {
		// } catch (\Throwable $th) {
		// 	//throw $th;
		// }
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Proyecto $proyecto)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Proyecto $proyecto)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Proyecto $proyecto)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Proyecto $proyecto)
	{
		//
	}
}
