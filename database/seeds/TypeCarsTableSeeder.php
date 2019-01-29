<?php

use Illuminate\Database\Seeder;

class TypeCarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('type_cars')->delete();

        DB::table('type_cars')->insert(['name' => 'Bus']);
        DB::table('type_cars')->insert(['name' => 'Minibus']);
        DB::table('type_cars')->insert(['name' => 'Truck']);
        DB::table('type_cars')->insert(['name' => 'Passenger car']);
    }
}
