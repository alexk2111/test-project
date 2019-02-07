<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logs', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('auto_park_id');
            $table->unsignedInteger('driver_id');
            $table->unsignedInteger('route_id');
            $table->unsignedInteger('type_car_id');
            $table->unsignedInteger('type_state_id');
            $table->unsignedInteger('type_status_id');
            $table->timestamp('start_date');
            $table->timestamp('finish_date')->nullable();
            $table->timestamps();

            $table->foreign('auto_park_id')->references('id')->on('auto_parks');
            $table->foreign('driver_id')->references('id')->on('drivers');
            $table->foreign('route_id')->references('id')->on('routes');
            $table->foreign('type_car_id')->references('id')->on('type_cars');
            $table->foreign('type_state_id')->references('id')->on('type_states');
            $table->foreign('type_status_id')->references('id')->on('type_statuses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('logs');
    }
}
