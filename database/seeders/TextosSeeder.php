<?php

namespace Database\Seeders;

use App\Models\Website;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class TextosSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		$locales = config('translatable.locale') ?? ['es', 'en'];
		$textES = File::get(public_path("data/es.json"));
		$textEN = File::get(public_path("data/en.json"));

		$textos = [
			'es' => json_decode($textES),
			'en' => json_decode($textEN),
		];
		DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
		DB::table('websites')->truncate();
		DB::statement('SET FOREIGN_KEY_CHECKS = 1;');

		$web = Website::create([
			'social_in' => 'https://instagram.com/blackswancapitalmx?igshid=Y2I2MzMwZWM3ZA==',
			'social_fb' => 'https://www.facebook.com/BlackSwanCapitalMx?mibextid=LQQJ4d',
			'correo' => '',
			'telefono' => '9999480017',
			'location' => 'https://goo.gl/maps/ov3ZmX4NabZxTZ2s7',
			'home_s3_bg1' => 'img/web/capital.png',
			'home_s3_bg2' => 'img/web/real.jpg',
			'home_s3_bg3' => 'img/web/hospitality.png',
			'about_s2_bg' => 'img/web/raulyjacobo.png',
			'about_s3_bg' => 'img/web/equipobs.jpg',
		]);

		foreach ($locales as $locale) {
			$web->translateOrNew($locale)->header_info = $textos[$locale]->header_info;
			$web->translateOrNew($locale)->home_s1_title1 = $textos[$locale]->home_s1_title1;
			$web->translateOrNew($locale)->home_s1_title2 = $textos[$locale]->home_s1_title2;
			$web->translateOrNew($locale)->home_s2_text1 = $textos[$locale]->home_s2_text1;
			$web->translateOrNew($locale)->home_s3_title = $textos[$locale]->home_s3_title;
			$web->translateOrNew($locale)->home_s3_title1 = $textos[$locale]->home_s3_title1;
			$web->translateOrNew($locale)->home_s3_info1 = $textos[$locale]->home_s3_info1;
			$web->translateOrNew($locale)->home_s3_title2 = $textos[$locale]->home_s3_title2;
			$web->translateOrNew($locale)->home_s3_info2 = $textos[$locale]->home_s3_info2;
			$web->translateOrNew($locale)->home_s3_title3 = $textos[$locale]->home_s3_title3;
			$web->translateOrNew($locale)->home_s3_info3 = $textos[$locale]->home_s3_info3;
			$web->translateOrNew($locale)->about_s1_title = $textos[$locale]->about_s1_title;
			$web->translateOrNew($locale)->about_s1_subtitle = $textos[$locale]->about_s1_subtitle;
			$web->translateOrNew($locale)->about_s2_title = $textos[$locale]->about_s2_title;
			$web->translateOrNew($locale)->about_s2_info = $textos[$locale]->about_s2_info;
			$web->translateOrNew($locale)->about_s3_title = $textos[$locale]->about_s3_title;
			$web->translateOrNew($locale)->about_s3_info = $textos[$locale]->about_s3_info;
			$web->translateOrNew($locale)->capital_s1_title = $textos[$locale]->capital_s1_title;
			$web->translateOrNew($locale)->capital_s1_subtitle = $textos[$locale]->capital_s1_subtitle;
			$web->translateOrNew($locale)->capital_s2_subtitle = $textos[$locale]->capital_s2_subtitle;
			$web->translateOrNew($locale)->capital_s2_title1 = $textos[$locale]->capital_s2_title1;
			$web->translateOrNew($locale)->capital_s2_title2 = $textos[$locale]->capital_s2_title2;
			$web->translateOrNew($locale)->capital_s2_info = $textos[$locale]->capital_s2_info;
			$web->translateOrNew($locale)->capital_s2_n1title = $textos[$locale]->capital_s2_n1title;
			$web->translateOrNew($locale)->capital_s2_n1subtitle = $textos[$locale]->capital_s2_n1subtitle;
			$web->translateOrNew($locale)->capital_s2_n1info = $textos[$locale]->capital_s2_n1info;
			$web->translateOrNew($locale)->capital_s2_n2title = $textos[$locale]->capital_s2_n2title;
			$web->translateOrNew($locale)->capital_s2_n2subtitle = $textos[$locale]->capital_s2_n2subtitle;
			$web->translateOrNew($locale)->capital_s2_n2info = $textos[$locale]->capital_s2_n2info;
			$web->translateOrNew($locale)->capital_s2_n3title = $textos[$locale]->capital_s2_n3title;
			$web->translateOrNew($locale)->capital_s2_n3subtitle = $textos[$locale]->capital_s2_n3subtitle;
			$web->translateOrNew($locale)->capital_s2_n3info = $textos[$locale]->capital_s2_n3info;
			$web->translateOrNew($locale)->capital_s2_info2 = $textos[$locale]->capital_s2_info2;
			$web->translateOrNew($locale)->capital_s3_title = $textos[$locale]->capital_s3_title;
			$web->translateOrNew($locale)->real_s1_title = $textos[$locale]->real_s1_title;
			$web->translateOrNew($locale)->real_s1_subtitle = $textos[$locale]->real_s1_subtitle;
			$web->translateOrNew($locale)->real_s2_subtitle = $textos[$locale]->real_s2_subtitle;
			$web->translateOrNew($locale)->real_s2_title1 = $textos[$locale]->real_s2_title1;
			$web->translateOrNew($locale)->real_s2_title2 = $textos[$locale]->real_s2_title2;
			$web->translateOrNew($locale)->real_s2_info = $textos[$locale]->real_s2_info;
			$web->translateOrNew($locale)->real_s2_n1title = $textos[$locale]->real_s2_n1title;
			$web->translateOrNew($locale)->real_s2_n1subtitle = $textos[$locale]->real_s2_n1subtitle;
			$web->translateOrNew($locale)->real_s2_n1info = $textos[$locale]->real_s2_n1info;
			$web->translateOrNew($locale)->real_s2_n2title = $textos[$locale]->real_s2_n2title;
			$web->translateOrNew($locale)->real_s2_n2subtitle = $textos[$locale]->real_s2_n2subtitle;
			$web->translateOrNew($locale)->real_s2_n2info = $textos[$locale]->real_s2_n2info;
			$web->translateOrNew($locale)->real_s2_n3title = $textos[$locale]->real_s2_n3title;
			$web->translateOrNew($locale)->real_s2_n3subtitle = $textos[$locale]->real_s2_n3subtitle;
			$web->translateOrNew($locale)->real_s2_n3info = $textos[$locale]->real_s2_n3info;
			$web->translateOrNew($locale)->real_s2_info2 = $textos[$locale]->real_s2_info2;
			$web->translateOrNew($locale)->real_s3_title = $textos[$locale]->real_s3_title;
			$web->translateOrNew($locale)->hospi_s1_title = $textos[$locale]->hospi_s1_title;
			$web->translateOrNew($locale)->hospi_s1_subtitle = $textos[$locale]->hospi_s1_subtitle;
			$web->translateOrNew($locale)->hospi_s2_title1 = $textos[$locale]->hospi_s2_title1;
			$web->translateOrNew($locale)->hospi_s2_title2 = $textos[$locale]->hospi_s2_title2;
			$web->translateOrNew($locale)->hospi_s2_info = $textos[$locale]->hospi_s2_info;
			$web->translateOrNew($locale)->hospi_s3_title = $textos[$locale]->hospi_s3_title;
		}

		$web->save();
	}
}
