import {AutoPark} from "./auto-park";
import {Driver} from "./driver";
import {Route} from "./route";
import {TypeCar} from "./type-car";
import {TypeState} from "./type-states";
import {TypeStatus} from "./type-statuses";

export interface Log {
  id: number;
  auto_park_id: number;
  driver_id: number;
  route_id: number;
  type_car_id: number;
  type_state_id: number;
  type_status_id: number;
  start_date: string;
  finish_date: string;

  auto_park: AutoPark[];
  driver: Driver[];
  route: Route[];
  type_car: TypeCar[];
  type_state: TypeState[];
  type_status: TypeStatus[];
}

export class Log implements Log {
  id: number;
  auto_park_id: number;
  driver_id: number;
  route_id: number;
  type_car_id: number;
  type_state_id: number;
  type_status_id: number;
  start_date: string;
  finish_date: string;

  auto_park: AutoPark[];
  driver: Driver[] = [];
  route: Route[] = [];
  type_car: TypeCar[] = [];
  type_state: TypeState[] = [];
  type_status: TypeStatus[] = [];


  constructor(data: Log) {
    this.id = data.id;
    this.auto_park_id = data.auto_park_id;
    this.driver_id = data.driver_id;
    this.route_id = data.route_id;
    this.type_car_id = data.type_car_id;
    this.type_state_id = data.type_state_id;
    this.type_status_id = data.type_status_id;
    this.start_date = data.start_date;
    this.finish_date = data.finish_date;

    this.auto_park = data.auto_park;
    this.driver = data.driver;
    this.route = data.route;
    this.type_car = data.type_car;
    this.type_state = data.type_state;
    this.type_status = data.type_status;
  }
}