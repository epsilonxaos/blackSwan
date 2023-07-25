<?php

namespace App\Helpers;

use Illuminate\Support\Carbon;

class Helpers
{
	/**
	 * Return fecha en español - 01 de Marzo del 2021
	 * @param string Required date  $fecha
	 * @return string New Date
	 */
	public static function dateSpanishComplete($fecha)
	{
		$meses = array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

		$fecha = Carbon::parse($fecha);
		$mes = $meses[($fecha->format('n')) - 1];
		return $fecha->format('d') . ' de ' . $mes . ' del ' . $fecha->format('Y');
	}

	/**
	 * Return fecha en español corto - 01/Mar/2021
	 * @param string Required date  $fecha
	 * @return string New Date
	 */
	public static function dateSpanishShort($fecha)
	{
		$meses = array("Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic");

		$fecha = Carbon::parse($fecha);
		$mes = $meses[($fecha->format('n')) - 1];
		return $fecha->format('d') . '/' . $mes . '/' . $fecha->format('Y');
	}
}
