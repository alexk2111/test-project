<?php

use Faker\Generator as Faker;

$factory->define(App\Driver::class, function (Faker $faker) {
    return [
        'name' => 'Driver_' . $faker->name,
        //
    ];
});
