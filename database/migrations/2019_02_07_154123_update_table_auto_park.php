<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateTableAutoPark extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('auto_parks', function (Blueprint $table) {
            $table->dropForeign('auto_parks_tag_id_foreign');

            $table->unsignedInteger('tag_id')->nullable()->change();

            $table->foreign('tag_id')->references('id')->on('tags');
        });
        //
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
