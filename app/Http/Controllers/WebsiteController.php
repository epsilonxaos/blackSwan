<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\Website;
use Illuminate\Http\Request;

class WebsiteController extends Controller
{

	protected $directorio = "public/website";
	protected $locales = ['es', 'en'];

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
		//
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Website $website)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(String $seccion)
	{
		$params = [
			'title' => ucfirst($seccion) . " - Actualizar sección",
			'breadcrumb' => [
				[
					'title' => ucfirst($seccion),
					'route' => 'panel.website.edit',
					'params' => [
						'seccion' => $seccion
					],
					'active' => true,
				]
			],
			'data' => Website::find(1)
		];

		$view = 'panel.website.' . $seccion;
		return view($view, $params);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(String $seccion, Request $request)
	{
		$id = 1;
		$upd = Website::find($id);

		if ($request->hasFile('home_s3_bg1')) {
			Helpers::deleteFileStorage('proyectos', 'home_s3_bg1', $id);
			$home_s3_bg1 = Helpers::addFileStorage($request->file('home_s3_bg1'), $this->directorio);
			$upd->home_s3_bg1 = $home_s3_bg1;
			$upd->save();
		}
		if ($request->hasFile('home_s3_bg2')) {
			Helpers::deleteFileStorage('proyectos', 'home_s3_bg2', $id);
			$home_s3_bg2 = Helpers::addFileStorage($request->file('home_s3_bg2'), $this->directorio);
			$upd->home_s3_bg2 = $home_s3_bg2;
			$upd->save();
		}
		if ($request->hasFile('home_s3_bg3')) {
			Helpers::deleteFileStorage('proyectos', 'home_s3_bg3', $id);
			$home_s3_bg3 = Helpers::addFileStorage($request->file('home_s3_bg3'), $this->directorio);
			$upd->home_s3_bg3 = $home_s3_bg3;
			$upd->save();
		}
		if ($request->hasFile('about_s2_bg')) {
			Helpers::deleteFileStorage('proyectos', 'about_s2_bg', $id);
			$about_s2_bg = Helpers::addFileStorage($request->file('about_s2_bg'), $this->directorio);
			$upd->about_s2_bg = $about_s2_bg;
			$upd->save();
		}
		if ($request->hasFile('about_s3_bg')) {
			Helpers::deleteFileStorage('proyectos', 'about_s3_bg', $id);
			$about_s3_bg = Helpers::addFileStorage($request->file('about_s3_bg'), $this->directorio);
			$upd->about_s3_bg = $about_s3_bg;
			$upd->save();
		}

		if ($request->social_in) $upd->social_in = $request->social_in;
		if ($request->social_fb) $upd->social_fb = $request->social_fb;
		if ($request->correo) $upd->correo = $request->correo;
		if ($request->telefono) $upd->telefono = $request->telefono;
		if ($request->location) $upd->location = $request->location;
		$upd->save();

		foreach ($this->locales as $locale) {
			if ($request->header_info) $upd->translateOrNew($locale)->header_info = $request->header_info[$locale];
			if ($request->home_s1_title1) $upd->translateOrNew($locale)->home_s1_title1 = $request->home_s1_title1[$locale];
			if ($request->home_s1_title2) $upd->translateOrNew($locale)->home_s1_title2 = $request->home_s1_title2[$locale];
			if ($request->home_s2_text1) $upd->translateOrNew($locale)->home_s2_text1 = $request->home_s2_text1[$locale];
			if ($request->home_s3_title) $upd->translateOrNew($locale)->home_s3_title = $request->home_s3_title[$locale];
			if ($request->home_s3_title1) $upd->translateOrNew($locale)->home_s3_title1 = $request->home_s3_title1[$locale];
			if ($request->home_s3_info1) $upd->translateOrNew($locale)->home_s3_info1 = $request->home_s3_info1[$locale];
			if ($request->home_s3_title2) $upd->translateOrNew($locale)->home_s3_title2 = $request->home_s3_title2[$locale];
			if ($request->home_s3_info2) $upd->translateOrNew($locale)->home_s3_info2 = $request->home_s3_info2[$locale];
			if ($request->home_s3_title3) $upd->translateOrNew($locale)->home_s3_title3 = $request->home_s3_title3[$locale];
			if ($request->home_s3_info3) $upd->translateOrNew($locale)->home_s3_info3 = $request->home_s3_info3[$locale];
			if ($request->about_s1_title) $upd->translateOrNew($locale)->about_s1_title = $request->about_s1_title[$locale];
			if ($request->about_s1_subtitle) $upd->translateOrNew($locale)->about_s1_subtitle = $request->about_s1_subtitle[$locale];
			if ($request->about_s2_title) $upd->translateOrNew($locale)->about_s2_title = $request->about_s2_title[$locale];
			if ($request->about_s2_info) $upd->translateOrNew($locale)->about_s2_info = $request->about_s2_info[$locale];
			if ($request->about_s3_title) $upd->translateOrNew($locale)->about_s3_title = $request->about_s3_title[$locale];
			if ($request->about_s3_info) $upd->translateOrNew($locale)->about_s3_info = $request->about_s3_info[$locale];
			if ($request->capital_s1_title) $upd->translateOrNew($locale)->capital_s1_title = $request->capital_s1_title[$locale];
			if ($request->capital_s1_subtitle) $upd->translateOrNew($locale)->capital_s1_subtitle = $request->capital_s1_subtitle[$locale];
			if ($request->capital_s2_subtitle) $upd->translateOrNew($locale)->capital_s2_subtitle = $request->capital_s2_subtitle[$locale];
			if ($request->capital_s2_title1) $upd->translateOrNew($locale)->capital_s2_title1 = $request->capital_s2_title1[$locale];
			if ($request->capital_s2_title2) $upd->translateOrNew($locale)->capital_s2_title2 = $request->capital_s2_title2[$locale];
			if ($request->capital_s2_info) $upd->translateOrNew($locale)->capital_s2_info = $request->capital_s2_info[$locale];
			if ($request->capital_s2_n1title) $upd->translateOrNew($locale)->capital_s2_n1title = $request->capital_s2_n1title[$locale];
			if ($request->capital_s2_n1subtitle) $upd->translateOrNew($locale)->capital_s2_n1subtitle = $request->capital_s2_n1subtitle[$locale];
			if ($request->capital_s2_n1info) $upd->translateOrNew($locale)->capital_s2_n1info = $request->capital_s2_n1info[$locale];
			if ($request->capital_s2_n2title) $upd->translateOrNew($locale)->capital_s2_n2title = $request->capital_s2_n2title[$locale];
			if ($request->capital_s2_n2subtitle) $upd->translateOrNew($locale)->capital_s2_n2subtitle = $request->capital_s2_n2subtitle[$locale];
			if ($request->capital_s2_n2info) $upd->translateOrNew($locale)->capital_s2_n2info = $request->capital_s2_n2info[$locale];
			if ($request->capital_s2_n3title) $upd->translateOrNew($locale)->capital_s2_n3title = $request->capital_s2_n3title[$locale];
			if ($request->capital_s2_n3subtitle) $upd->translateOrNew($locale)->capital_s2_n3subtitle = $request->capital_s2_n3subtitle[$locale];
			if ($request->capital_s2_n3info) $upd->translateOrNew($locale)->capital_s2_n3info = $request->capital_s2_n3info[$locale];
			if ($request->capital_s2_info2) $upd->translateOrNew($locale)->capital_s2_info2 = $request->capital_s2_info2[$locale];
			if ($request->capital_s3_title) $upd->translateOrNew($locale)->capital_s3_title = $request->capital_s3_title[$locale];
			if ($request->real_s1_title) $upd->translateOrNew($locale)->real_s1_title = $request->real_s1_title[$locale];
			if ($request->real_s1_subtitle) $upd->translateOrNew($locale)->real_s1_subtitle = $request->real_s1_subtitle[$locale];
			if ($request->real_s2_subtitle) $upd->translateOrNew($locale)->real_s2_subtitle = $request->real_s2_subtitle[$locale];
			if ($request->real_s2_title1) $upd->translateOrNew($locale)->real_s2_title1 = $request->real_s2_title1[$locale];
			if ($request->real_s2_title2) $upd->translateOrNew($locale)->real_s2_title2 = $request->real_s2_title2[$locale];
			if ($request->real_s2_info) $upd->translateOrNew($locale)->real_s2_info = $request->real_s2_info[$locale];
			if ($request->real_s2_n1title) $upd->translateOrNew($locale)->real_s2_n1title = $request->real_s2_n1title[$locale];
			if ($request->real_s2_n1subtitle) $upd->translateOrNew($locale)->real_s2_n1subtitle = $request->real_s2_n1subtitle[$locale];
			if ($request->real_s2_n1info) $upd->translateOrNew($locale)->real_s2_n1info = $request->real_s2_n1info[$locale];
			if ($request->real_s2_n2title) $upd->translateOrNew($locale)->real_s2_n2title = $request->real_s2_n2title[$locale];
			if ($request->real_s2_n2subtitle) $upd->translateOrNew($locale)->real_s2_n2subtitle = $request->real_s2_n2subtitle[$locale];
			if ($request->real_s2_n2info) $upd->translateOrNew($locale)->real_s2_n2info = $request->real_s2_n2info[$locale];
			if ($request->real_s2_n3title) $upd->translateOrNew($locale)->real_s2_n3title = $request->real_s2_n3title[$locale];
			if ($request->real_s2_n3subtitle) $upd->translateOrNew($locale)->real_s2_n3subtitle = $request->real_s2_n3subtitle[$locale];
			if ($request->real_s2_n3info) $upd->translateOrNew($locale)->real_s2_n3info = $request->real_s2_n3info[$locale];
			if ($request->real_s2_info2) $upd->translateOrNew($locale)->real_s2_info2 = $request->real_s2_info2[$locale];
			if ($request->real_s3_title) $upd->translateOrNew($locale)->real_s3_title = $request->real_s3_title[$locale];
			if ($request->hospi_s1_title) $upd->translateOrNew($locale)->hospi_s1_title = $request->hospi_s1_title[$locale];
			if ($request->hospi_s1_subtitle) $upd->translateOrNew($locale)->hospi_s1_subtitle = $request->hospi_s1_subtitle[$locale];
			if ($request->hospi_s1_info) $upd->translateOrNew($locale)->hospi_s1_info = $request->hospi_s1_info[$locale];
			if ($request->hospi_s3_title) $upd->translateOrNew($locale)->hospi_s3_title = $request->hospi_s3_title[$locale];
		}

		$upd->save();

		return redirect()->back()->with('success', 'Registro actualizado correctamente!');
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Website $website)
	{
		//
	}
}
