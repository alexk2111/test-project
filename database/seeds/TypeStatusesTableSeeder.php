<?php

use Illuminate\Database\Seeder;

class TypeStatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('type_statuses')->delete();

        DB::table('type_statuses')->insert(['name' => 'New']);
        DB::table('type_statuses')->insert(['name' => 'Used']);
        DB::table('type_statuses')->insert(['name' => 'Old']);
    }
}
