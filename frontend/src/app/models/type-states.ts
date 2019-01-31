export interface TypeStateInterface {
  id: number;
  name: string;
}
export class TypeState implements TypeStateInterface {
  id: number;
  name: string;

  constructor(data: TypeStateInterface) {
    this.id = data.id;
    this.name = data.name;
  }
}