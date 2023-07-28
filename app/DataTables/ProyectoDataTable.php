<?php

namespace App\DataTables;

use App\Models\Proyecto;
use App\Providers\PermissionKey;
use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class ProyectoDataTable extends DataTable
{
	/**
	 * Build the DataTable class.
	 *
	 * @param QueryBuilder $query Results from query() method.
	 */
	public function dataTable(QueryBuilder $query): EloquentDataTable
	{
		return (new EloquentDataTable($query))
			->setRowId('id')
			->addColumn('status', function (Proyecto $p) {

				$ruta = route('panel.proyectos.changeStatus');

				$status = '<div class="flex items-start justify-center mx-auto" style="min-width: 100px">';
				$status .= '
				<label class="relative inline-flex items-center mb-4 cursor-pointer">
					<input type="checkbox" id="toggle_' . $p->id . '" value="' . $p->id . '" class="sr-only peer" ' . (($p->status == 1) ? 'checked="checked"' : '') . '>
					<div id="divtoggle_' . $p->id . '" onclick="cambiar_status(\'divtoggle_' . $p->id . '\', ' . $p->id . ', ' . ($p->status == 1 ? 0 : 1) . ', \'' . $ruta . '\')" class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				</label>';


				$status .= '</div>';

				return $status;
			})
			->addColumn('acciones', function (Proyecto $p) {

				$acciones = '<div class="flex items-start justify-center mx-auto" style="min-width: 100px">';

				// if (auth()->user()->hasAllPermissions([PermissionKey::Socios['permissions']['edit']['name'], PermissionKey::Socios['permissions']['update']['name']])) {
				$acciones .= '
					<a  href="' . route("panel.proyectos.edit", ["seccion" => $this->seccion, "id" => $p->id]) . '" class="font-medium text-emerald-600 dark:text-emerald-500 mr-2" title="Editar">
						<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
							<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
							<path d="M16 5l3 3"></path>
						</svg>
					</a>';
				// } else {
				// 	if (auth()->user()->hasPermissionTo(PermissionKey::Socios['permissions']['edit']['name'])) {
				// $acciones .= '
				// 		<a href="' . route("panel.proyectos.edit", ["seccion" => $this->seccion, "id" => $p->id]) . '" class="font-medium text-blue-600 dark:text-blue-500 mr-2" title="Ver detalle">
				// 			<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				// 				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				// 				<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
				// 				<path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
				// 				<path d="M3 6l0 13"></path>
				// 				<path d="M12 6l0 13"></path>
				// 				<path d="M21 6l0 13"></path>
				// 			</svg>
				// 		</a>';
				// 	}
				// }

				// if (auth()->user()->hasPermissionTo(PermissionKey::Socios['permissions']['destroy']['name'])) {
				$acciones .= '
					<form action="' . route("panel.proyectos.destroy", ["id" => $p->id]) . '" method="post" class="inline delete-form-' . $p->id . '">
						<input type="hidden" name="_token" value="' . csrf_token() . '" />
						<input type="hidden" name="_method" value="DELETE">
						<button title="Eliminar" type="button" onclick="deleteSubmitForm(' . $p->id . ')" class="font-medium text-pink-600 dark:text-pink-500">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M4 7l16 0"></path>
								<path d="M10 11l0 6"></path>
								<path d="M14 11l0 6"></path>
								<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
								<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
							</svg>
						</button>
					</form>';
				// }

				$acciones .= '</div>';

				return $acciones;
			})
			->addColumn('cover', function (Proyecto $p) {
				return '<div class="bg-cover" style="background-image: url(' . asset($p->cover) . ')"></div>';
			})
			->addColumn('title', function (Proyecto $p) {
				return $p->translate('es')->title ?? '';
			})
			->rawColumns(['acciones', 'cover', 'status']);
	}

	/**
	 * Get the query source of dataTable.
	 */
	public function query(Proyecto $model): QueryBuilder
	{
		return $model->where('seccion', $this->seccion)->newQuery();
	}

	/**
	 * Optional method if you want to use the html builder.
	 */
	public function html(): HtmlBuilder
	{
		return $this->builder()
			->setTableId('proyectos-table')
			->columns($this->getColumns())
			->minifiedAjax()
			->parameters([
				'info' => true,
				"lengthMenu" => [10, 25, 50, 75, 100],
				'language' => [
					'url' => url('/plugins/es-ES.json')
				],
			])
			->orderBy(0)
			->selectStyleSingle()
			->buttons([
				// Button::make('excel'),
				// Button::make('csv'),
				// Button::make('pdf'),
				// Button::make('print'),
				// Button::make('reset'),
				// Button::make('reload')
			]);
	}

	/**
	 * Get the dataTable columns definition.
	 */
	public function getColumns(): array
	{
		return [
			Column::make('id'),
			Column::make('cover')->title('Portada'),
			Column::make('title')->title('Titulo'),
			Column::computed('status')->title('Visualizar')
				->exportable(false)
				->printable(false)
				->width(120)
				->addClass('text-center'),
			Column::computed('acciones')
				->exportable(false)
				->printable(false)
				->width(150)
				->addClass('text-center'),
		];
	}

	/**
	 * Get the filename for export.
	 */
	protected function filename(): string
	{
		return 'Proyecto_' . date('YmdHis');
	}
}
