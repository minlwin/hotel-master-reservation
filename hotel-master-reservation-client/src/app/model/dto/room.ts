import { RoomType } from './room-type';
import { Floor } from './building';
export class Room{
  code: number;
  name: string;
  others: {[key: string]: string};
  floor: Floor;
  roomType: RoomType;
}