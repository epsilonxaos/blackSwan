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
		Schema::create('valores', function (Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
		});
		Schema::create('valores_translations', function (Blueprint $table) {
			$table->increments('id');

			$table->integer('valores_id')->unsigned();
			$table->string('locale')->index();
			$table->string('title');
			$table->text('info');

			$table->unique(['valores_id', 'locale']);
			$table->foreign('valores_id')->references('id')->on('valores')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('valores_translations');
		Schema::dropIfExists('valores');
	}
};
