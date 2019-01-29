<?php

use Illuminate\Database\Seeder;

class TypeStatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('type_states')->delete();

        DB::table('type_states')->insert(['name' => 'On route']);
        DB::table('type_states')->insert(['name' => 'Under repair']);
        DB::table('type_states')->insert(['name' => 'Idle']);
    }
}
