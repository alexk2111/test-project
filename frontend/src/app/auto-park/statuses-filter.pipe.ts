import { Pipe, PipeTransform } from '@angular/core';
import { AutoPark } from "../models/auto-park";

@Pipe({
  name: 'statusesFilter'
})
export class StatusesFilterPipe implements PipeTransform {

  transform(autoParks: AutoPark[], value?: any): any {
    if (!value) return autoParks;
    return autoParks.filter((autoPark: AutoPark) => autoPark.type_status_id == value);
  }
}
