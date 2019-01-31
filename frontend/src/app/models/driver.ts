export interface DriverInterface {
  id: number;
  name: string;
}
export class Driver implements DriverInterface {
  id: number;
  name: string;

  constructor(data: DriverInterface) {
    this.id = data.id;
    this.name = data.name;
  }
}