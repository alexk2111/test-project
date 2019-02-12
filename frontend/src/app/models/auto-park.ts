import {Driver} from "./driver";
import {Route} from "./route";
import {TypeCar} from "./type-car";
import {TypeState} from "./type-states";
import {TypeStatus} from "./type-statuses";
import {Tag} from "./tag";
// import {Logs} from "./logs";

export interface AutoPark {
  id: number;
  name: string;
  driver_id: number;
  route_id: number;
  type_car_id: number;
  type_state_id: number;
  type_status_id: number;
  age: number;

  driver: Driver[];
  route: Route[];
  type_car: TypeCar[];
  type_state: TypeState[];
  type_status: TypeStatus[];
  tags: Tag[];
  // logs: Logs[];
}
export class AutoPark implements AutoPark {
  id: number;
  name: string;
  driver_id: number;
  route_id: number;
  type_car_id: number;
  type_state_id: number;
  type_status_id: number;
  age: number;

  driver: Driver[] = [];
  route: Route[] = [];
  type_car: TypeCar[] = [];
  type_state: TypeState[] = [];
  type_status: TypeStatus[] = [];
  tags: Tag[] = [];
  // logs: Logs[] = [];


  constructor(data: AutoPark) {
    this.id = data.id;
    this.name = data.name;
    this.driver_id = data.driver_id;
    this.route_id = data.route_id;
    this.type_car_id = data.type_car_id;
    this.type_state_id = data.type_state_id;
    this.type_status_id = data.type_status_id;
    this.age = data.age;

    this.driver = data.driver;
    this.route = data.route;
    this.type_car = data.type_car;
    this.type_state = data.type_state;
    this.type_status = data.type_status;
    this.tags = data.tags;
    // this.logs = data.logs;
  }

}