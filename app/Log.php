<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    const FIELD_ID = 'id';
    const FIELD_AUTO_PARK_ID = 'auto_park_id';
    const FIELD_DRIVER_ID = 'driver_id';
    const FIELD_ROUTE_ID = 'route_id';
    const FIELD_TYPE_CAR_ID = 'type_car_id';
    const FIELD_TYPE_STATE_ID = 'type_state_id';
    const FIELD_TYPE_STATUS_ID = 'type_status_id';
    const FIELD_START_DATE = 'start_date';
    const FIELD_FINISH_DATE = 'finish_date';
    const FIELD_UPDATED_AT = 'updated_at';
    const FIELD_CREATED_AT = 'created_at';
    //

    protected $fillable = [
        self::FIELD_ID,
        self::FIELD_AUTO_PARK_ID,
        self::FIELD_DRIVER_ID,
        self::FIELD_ROUTE_ID,
        self::FIELD_TYPE_CAR_ID,
        self::FIELD_TYPE_STATE_ID,
        self::FIELD_TYPE_STATUS_ID,
        self::FIELD_START_DATE,
        self::FIELD_FINISH_DATE,
    ];

    protected $hidden = [
    ];

    public function autoPark() {
        return $this->belongsTo(AutoPark::class);
    }

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
}
