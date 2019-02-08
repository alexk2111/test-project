<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AutoPark extends Model
{
    const FIELD_ID = 'id';
    const FIELD_NAME = 'name';
    const FIELD_DRIVER_ID = 'driver_id';
    const FIELD_ROUTE_ID = 'route_id';
    const FIELD_TYPE_CAR_ID = 'type_car_id';
    const FIELD_TYPE_STATE_ID = 'type_state_id';
    const FIELD_TYPE_STATUS_ID = 'type_status_id';
//    const FIELD_TAG_ID  = 'tag_id';
    const FIELD_UPDATED_AT = 'updated_at';
    const FIELD_CREATED_AT = 'created_at';

    //
    protected $fillable = [
        self::FIELD_ID,
        self::FIELD_NAME,
        self::FIELD_DRIVER_ID,
        self::FIELD_ROUTE_ID,
        self::FIELD_TYPE_CAR_ID,
        self::FIELD_TYPE_STATE_ID,
        self::FIELD_TYPE_STATUS_ID,
//        self::FIELD_TAG_ID,
    ];

    protected $hidden = [
    ];

    public function driver() {
        return $this->belongsTo(Driver::class);
    }

    public function route() {
        return $this->belongsTo(Route::class);
    }

    public function typeCar() {
        return $this->belongsTo(TypeCar::class);
    }

    public function typeState() {
        return $this->belongsTo(TypeState::class);
    }

    public function typeStatus() {
        return $this->belongsTo(TypeStatus::class);
    }

    public function tags() {
        return $this->hasMany(Tag::class);
    }
    public function logs() {
        return $this->hasMany(Log::class);
    }


}
