<?php

namespace App\Http\Controllers;

use App\DataTables\ValoresDataTable;
use App\Models\Valores;
use Illuminate\Http\Request;

class ValoresController extends Controller
{

	protected $directorio = "public/valores";
	protected $locales = ['es', 'en'];

	/**
	 * Display a listing of the resource.
	 */
	public function index(ValoresDataTable $dataTable)
	{
		return $dataTable->render('panel.valores.index', [
			"title" => "Valores",
			"breadcrumb" => [
				[
					'title' => 'Valores',
					'active' => true
				]
			],
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		return view('panel.valores.create', [
			"title" => "Nuevo proyecto",
			"breadcrumb" => [
				[
					'title' => 'Valores',
					'route' => 'panel.valores.index',
					'active' => false,
				],
				[
					'title' => 'Nuevo',
					'active' => true,
				]
			]
		]);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$p = Valores::create();

		foreach ($this->locales as $locale) {
			$p->translateOrNew($locale)->title = $request->title[$locale];
			$p->translateOrNew($locale)->info = $request->info[$locale];
		}

		$p->save();

		return redirect()->back()->with('success', 'El registro se ha creado correctamente');
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Int $id)
	{
		return view('panel.valores.edit', [
			'title' => 'Editar valores',
			'breadcrumb' => [
				[
					'title' => 'Valores',
					'route' => 'panel.valores.index',
					'active' => false,
				],
				[
					'title' => 'Editar',
					'route' => 'panel.valores.edit',
					'params' => [
						'id' => $id
					],
					'active' => true
				]
			],
			'data' => Valores::find($id)
		]);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Int $id, Request $request)
	{
		$upd = Valores::find($id);

		foreach ($this->locales as $locale) {
			$upd->translateOrNew($locale)->title = $request->title[$locale];
			$upd->translateOrNew($locale)->info = $request->info[$locale];
		}

		$upd->save();

		return redirect()->back()->with('success', 'Registro actualizado correctamente!');
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Int $id)
	{
		Valores::where('id', $id)->delete();
		return redirect()->back()->with('success', 'Registro eliminado correctamente!');
	}
}
