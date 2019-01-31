export interface TypeCarInterface {
  id: number;
  name: string;
}
export class TypeCar implements TypeCarInterface {
  id: number;
  name: string;

  constructor(data: TypeCarInterface) {
    this.id = data.id;
    this.name = data.name;
  }
}