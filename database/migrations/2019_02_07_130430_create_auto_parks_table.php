<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAutoParksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auto_parks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique();
            $table->unsignedInteger('driver_id');
            $table->unsignedInteger('route_id');
            $table->unsignedInteger('type_car_id');
            $table->unsignedInteger('type_state_id');
            $table->unsignedInteger('type_status_id');
            $table->unsignedInteger('tag_id');
            $table->timestamps();

            $table->foreign('driver_id')->references('id')->on('drivers');
            $table->foreign('route_id')->references('id')->on('routes');
            $table->foreign('type_car_id')->references('id')->on('type_cars');
            $table->foreign('type_state_id')->references('id')->on('type_states');
            $table->foreign('type_status_id')->references('id')->on('type_statuses');
            $table->foreign('tag_id')->references('id')->on('tags');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('auto_parks');
    }
}
