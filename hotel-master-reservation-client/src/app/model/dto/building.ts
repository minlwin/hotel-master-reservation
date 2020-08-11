import { Hotel } from './hotel';
export class Building{
    code: string;
    name: string;
    type: string
    hotel: Hotel;
    floors: Floor[];
}

export class Floor{
    code: string;
    name: string;
    building: Building
}