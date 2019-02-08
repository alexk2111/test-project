<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateTableAutoparkTag extends Migration
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

            $table->dropColumn('tag_id');

        });

        Schema::table('tags', function (Blueprint $table) {

            $table->unsignedInteger('auto_park_id')->after('id');

            $table->foreign('auto_park_id')->references('id')->on('auto_parks');
        });



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
