<?php

use Faker\Generator as Faker;

$factory->define(App\Route::class, function (Faker $faker) {
    return [
        'name' => 'Route_' . $faker->name,
    ];
});
