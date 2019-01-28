<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(DriversTableSeeder::class);
        $this->call(RoutesTableSeeder::class);
        $this->call(TypeCarsTableSeeder::class);
        $this->call(TypeStatesTableSeeder::class);
        $this->call(TypeStatusesTableSeeder::class);
    }
}
