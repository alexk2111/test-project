export interface RouteInterface {
  id: number;
  name: string;
}
export class Route implements RouteInterface {
  id: number;
  name: string;

  constructor(data: RouteInterface) {
    this.id = data.id;
    this.name = data.name;
  }
}