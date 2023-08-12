<?php

namespace App\Http\Controllers;

use App\DataTables\NewsletterDataTable;
use App\Models\Newsletter;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index(NewsletterDataTable $dataTable)
	{
		return $dataTable->render('panel.newsletter.index', [
			"title" => "Newsletter",
			"breadcrumb" => [
				[
					'title' => 'Newsletter',
					'active' => true
				]
			],
		]);
	}

	/**
	 * Remove the specified resource.
	 */
	public function destroy(Int $id)
	{
		Newsletter::where('id', $id)->delete();
		return redirect()->back()->with('success', 'El registro se ha eliminado correctamente');
	}

	/**
	 * Remove the all resource.
	 */
	public function destroyAll()
	{
		Newsletter::truncate();
		return redirect()->back()->with('success', 'Todos los datos se han eliminado correctamente');
	}
}
