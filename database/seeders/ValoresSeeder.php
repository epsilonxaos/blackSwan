<?php

namespace Database\Seeders;

use App\Models\Valores;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ValoresSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		$locales = config('translatable.locale') ?? ['es', 'en'];
		$json = File::get(public_path("data/valores.json"));
		$valores = json_decode($json);

		DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
		DB::table('valores')->truncate();
		DB::statement('SET FOREIGN_KEY_CHECKS = 1;');

		foreach ($valores as $val) {
			$v = Valores::create();

			foreach ($locales as $locale) {
				$v->translateOrNew($locale)->title = $val->title->$locale;
				$v->translateOrNew($locale)->info = $val->info->$locale;
			}

			$v->save();
		}
	}
}
