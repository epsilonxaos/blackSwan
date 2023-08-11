<?php

namespace App\DataTables;

use App\Models\Newsletter;
use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class NewsletterDataTable extends DataTable
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
			->addColumn('acciones', function (Newsletter $v) {

				$acciones = '<div class="flex items-start justify-center mx-auto" style="min-width: 100px">';


				// if (auth()->user()->hasPermissionTo(PermissionKey::Socios['permissions']['destroy']['name'])) {
				$acciones .= '
			<form action="' . route("panel.valores.destroy", ["id" => $v->id]) . '" method="post" class="inline delete-form-' . $v->id . '">
				<input type="hidden" name="_token" value="' . csrf_token() . '" />
				<input type="hidden" name="_method" value="DELETE">
				<button title="Eliminar" type="button" onclick="deleteSubmitForm(' . $v->id . ')" class="font-medium text-pink-600 dark:text-pink-500">
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
			->addColumn('correo', function (Newsletter $v) {
				return $v->correo ?? '';
			})
			->rawColumns(['acciones']);
	}

	/**
	 * Get the query source of dataTable.
	 */
	public function query(Newsletter $model): QueryBuilder
	{
		return $model->newQuery();
	}

	/**
	 * Optional method if you want to use the html builder.
	 */
	public function html(): HtmlBuilder
	{
		return $this->builder()
			->setTableId('newsletter-table')
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
				Button::make('excel'),
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
			Column::make('correo')->title('Correo electrónico'),
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
		return 'Newsletter_' . date('YmdHis');
	}
}
