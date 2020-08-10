export class Room{
  code: number;
  name: string;
  others: {[key: string]: string};
  photos: string[];
}