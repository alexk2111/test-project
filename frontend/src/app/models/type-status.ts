export interface TypeStatusInterface {
  id: number;
  name: string;
}
export class TypeStatus implements TypeStatusInterface {
  id: number;
  name: string;

  constructor(data: TypeStatusInterface) {
    this.id = data.id;
    this.name = data.name;
  }
}