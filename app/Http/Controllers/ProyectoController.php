<?php

namespace App\Http\Controllers;

use App\DataTables\ProyectoDataTable;
use App\Helpers\Helpers;
use App\Models\Proyecto;
use Illuminate\Http\Request;

class ProyectoController extends Controller
{

	protected $directorio = "public/proyecto";
	protected $directorioGalerias = "public/proyecto/galeria";
	protected $locales = ['es', 'en'];
	/**
	 * Display a listing of the resource.
	 */
	public function index(String $seccion, ProyectoDataTable $dataTable)
	{
		$query = Proyecto::where('seccion', $seccion)->get();


		return $dataTable->with('seccion', $seccion)->render('panel.proyectos.index', [
			"title" => "Capital",
			"breadcrumb" => [
				[
					'title' => ucfirst($seccion),
					'active' => true,
					'params' => [
						'seccion' => $seccion
					]
				]
			],
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create(String $seccion)
	{
		return view('panel.proyectos.create', [
			"title" => "Nuevo proyecto",
			"breadcrumb" => [
				[
					'title' => ucfirst($seccion),
					'route' => 'panel.proyectos.index',
					'active' => false,
					'params' => [
						'seccion' => $seccion
					]
				],
				[
					'title' => 'Nuevo proyecto',
					'active' => true,
				]
			]
		]);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(String $seccion, Request $request)
	{
		// dd($request->all());
		$cover = Helpers::addFileStorage($request->file('cover'), $this->directorio);
		$p = Proyecto::create([
			'cover' => $cover,
			'website' => $request->website,
			'seccion' => $seccion,
			'status' => 1
		]);

		foreach ($this->locales as $locale) {
			$p->translateOrNew($locale)->title = $request->title[$locale];
			$p->translateOrNew($locale)->subtitle = $request->subtitle[$locale];
			$p->translateOrNew($locale)->info = $request->info[$locale];
		}

		$p->save();

		return redirect()->back()->with('success', 'El registro se ha creado correctamente');
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
	public function edit(String $seccion, Int $id)
	{
		return view('panel.proyectos.edit', [
			'title' => 'Editar proyecto',
			'breadcrumb' => [
				[
					'title' => ucfirst($seccion),
					'route' => 'panel.proyectos.index',
					'active' => false,
					'params' => [
						'seccion' => $seccion
					],
				],
				[
					'title' => 'Editar proyecto',
					'route' => 'panel.proyectos.edit',
					'params' => [
						'seccion' => $seccion,
						'id' => $id
					],
					'active' => true
				]
			],
			'data' => Proyecto::find($id)
		]);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(String $seccion, Int $id, Request $request)
	{
		$upd = Proyecto::find($id);
		if ($request->hasFile('cover')) {
			Helpers::deleteFileStorage('proyectos', 'cover', $id);
			$cover = Helpers::addFileStorage($request->file('cover'), $this->directorio);
			$upd->cover = $cover;
			$upd->save();
		}

		$upd->website = $request->website;
		$upd->save();

		foreach ($this->locales as $locale) {
			$upd->translateOrNew($locale)->title = $request->title[$locale];
			$upd->translateOrNew($locale)->subtitle = $request->subtitle[$locale];
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
		Helpers::deleteFileStorage('proyectos', 'cover', $id);
		Proyecto::where('id', $id)->delete();
		return redirect()->back()->with('success', 'Registro eliminado correctamente!');
	}

	/**
	 * Change status to show - hidden
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function changeStatus(Request $request)
	{
		Helpers::changeStatus('proyectos', $request->id, $request->status);
		return 'true';
	}
}
