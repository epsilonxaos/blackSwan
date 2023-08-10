<?php

namespace Database\Seeders;

use App\Models\Proyecto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ProyectosSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		$locales = config('translatable.locale') ?? ['es', 'en'];
		$proyectos = json_decode(File::get(public_path("data/proyectos.json")));

		DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
		DB::table('proyectos')->truncate();
		DB::statement('SET FOREIGN_KEY_CHECKS = 1;');

		foreach ($proyectos as $key => $p) {
			$pro = Proyecto::create([
				'cover' => $p->cover,
				'website' => $p->website,
				'seccion' => $p->seccion,
				'status' => 1
			]);

			foreach ($locales as $locale) {
				$pro->translateOrNew($locale)->title = $p->$locale->title;
				$pro->translateOrNew($locale)->subtitle = $p->$locale->subtitle;
				$pro->translateOrNew($locale)->info = $p->$locale->info;
			}

			$pro->save();
		}
	}
}
