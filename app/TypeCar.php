<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TypeCar extends Model
{
    //
    const FIELD_ID = 'id';
    const FIELD_NAME = 'name';
    const FIELD_UPDATED_AT = 'updated_at';
    const FIELD_CREATED_AT = 'created_at';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        self::FIELD_ID,
        self::FIELD_NAME
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
    ];
}
