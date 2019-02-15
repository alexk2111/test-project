export interface TagInterface {
  id: number;
  auto_park_id: number;
  name: string;
}
export class Tag implements TagInterface {
  id: number;
  auto_park_id: number;
  name: string;

  constructor(data: TagInterface) {
    this.id = data.id;
    this.auto_park_id = data.auto_park_id;
    this.name = data.name;
  }
}