export interface TagInterface {
  id: number;
  name: string;
}
export class Tag implements TagInterface {
  id: number;
  name: string;

  constructor(data: TagInterface) {
    this.id = data.id;
    this.name = data.name;
  }
}