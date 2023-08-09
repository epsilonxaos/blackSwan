<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create('websites', function (Blueprint $table) {
			$table->increments('id');
			// Informacion de contacto
			$table->text('social_in')->nullable();
			$table->text('social_fb')->nullable();
			$table->string('correo')->nullable();
			$table->string('telefono')->nullable();
			$table->text('location')->nullable();

			// Home - seccion 3
			$table->string('home_s3_bg1')->nullable();
			$table->string('home_s3_bg2')->nullable();
			$table->string('home_s3_bg3')->nullable();

			// Nosotros - seccion 2
			$table->string('about_s2_bg')->nullable();
			// Nosotros - seccion 3
			$table->string('about_s3_bg')->nullable();

			//Capital - seccion 1
			$table->string('capital_video')->nullable();
			//Real estate - seccion 1
			$table->string('real_video')->nullable();
			//Hospitality - seccion 1
			$table->string('hospi_video')->nullable();

			$table->timestamps();
		});

		Schema::create('websites_translations', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('website_id')->unsigned();
			$table->string('locale')->index();

			// Header - info
			$table->text('header_info')->nullable();

			// Home - seccion 1
			$table->string('home_s1_title1')->nullable();
			$table->string('home_s1_title2')->nullable();
			// Home - seccion 2
			$table->longText('home_s2_text1')->nullable();
			// Home - seccion 3
			$table->string('home_s3_title')->nullable();
			$table->string('home_s3_title1')->nullable();
			$table->text('home_s3_info1')->nullable();
			$table->string('home_s3_title2')->nullable();
			$table->text('home_s3_info2')->nullable();
			$table->string('home_s3_title3')->nullable();
			$table->text('home_s3_info3')->nullable();

			// Nosotros - seccion 1
			$table->string('about_s1_title')->nullable();
			$table->string('about_s1_subtitle')->nullable();
			// Nosotros - seccion 2
			$table->string('about_s2_title')->nullable();
			$table->longText('about_s2_info')->nullable();
			// Nosotros - seccion 3
			$table->string('about_s3_title')->nullable();
			$table->longText('about_s3_info')->nullable();

			// Capital - seccion 1
			$table->string('capital_s1_title')->nullable();
			$table->string('capital_s1_subtitle')->nullable();
			// Capital - seccion 2
			$table->string('capital_s2_subtitle')->nullable();
			$table->string('capital_s2_title1')->nullable();
			$table->string('capital_s2_title2')->nullable();
			$table->longText('capital_s2_info')->nullable();
			$table->string('capital_s2_n1title')->nullable();
			$table->string('capital_s2_n1subtitle')->nullable();
			$table->string('capital_s2_n1info')->nullable();
			$table->string('capital_s2_n2title')->nullable();
			$table->string('capital_s2_n2subtitle')->nullable();
			$table->string('capital_s2_n2info')->nullable();
			$table->string('capital_s2_n3title')->nullable();
			$table->string('capital_s2_n3subtitle')->nullable();
			$table->string('capital_s2_n3info')->nullable();
			$table->longText('capital_s2_info2')->nullable();
			// Capital - seccion 3
			$table->string('capital_s3_title')->nullable();

			// Real estate - seccion 1
			$table->string('real_s1_title')->nullable();
			$table->string('real_s1_subtitle')->nullable();
			// Real estate - seccion 2
			$table->string('real_s2_subtitle')->nullable();
			$table->string('real_s2_title1')->nullable();
			$table->string('real_s2_title2')->nullable();
			$table->longText('real_s2_info')->nullable();
			$table->string('real_s2_n1title')->nullable();
			$table->string('real_s2_n1subtitle')->nullable();
			$table->string('real_s2_n1info')->nullable();
			$table->string('real_s2_n2title')->nullable();
			$table->string('real_s2_n2subtitle')->nullable();
			$table->string('real_s2_n2info')->nullable();
			$table->string('real_s2_n3title')->nullable();
			$table->string('real_s2_n3subtitle')->nullable();
			$table->string('real_s2_n3info')->nullable();
			$table->longText('real_s2_info2')->nullable();
			// Real estate - seccion 3
			$table->string('real_s3_title')->nullable();

			// Hopitality - seccion 1
			$table->string('hospi_s1_title')->nullable();
			$table->string('hospi_s1_subtitle')->nullable();
			// Hopitality - seccion 2
			$table->longText('hospi_s2_title1')->nullable();
			$table->longText('hospi_s2_title2')->nullable();
			$table->longText('hospi_s2_info')->nullable();
			$table->longText('hospi_s2_info2')->nullable();
			// Hopitality - seccion 3
			$table->string('hospi_s3_title')->nullable();


			$table->unique(['website_id', 'locale']);
			$table->foreign('website_id')->references('id')->on('websites')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('websites_translations');
		Schema::dropIfExists('websites');
	}
};
