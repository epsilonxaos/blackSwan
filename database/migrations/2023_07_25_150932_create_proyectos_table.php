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
		Schema::create('proyectos', function (Blueprint $table) {
			$table->increments('id');
			$table->string('cover')->nullable();
			$table->string('website')->nullable();
			$table->string('seccion');
			$table->tinyInteger('status')->default(1);

			$table->timestamps();
		});

		Schema::create('proyectos_translations', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('proyecto_id')->unsigned();
			$table->string('locale')->index();

			$table->string('title');
			$table->string('subtitle');
			$table->mediumText('info')->nullable();

			$table->unique(['proyecto_id', 'locale']);
			$table->foreign('proyecto_id')->references('id')->on('proyectos')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('proyectos_translations');
		Schema::dropIfExists('proyectos');
	}
};
