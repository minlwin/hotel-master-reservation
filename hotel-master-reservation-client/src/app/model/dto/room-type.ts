import { RoomCharges } from './room-charges';
import { Facility } from './facility';
import { Hotel } from './hotel';
export class RoomType{
    code: string;
    name: string;
    bedType: string;
    beds: number;
    hotel: Hotel;
    photos: string[];
    facilities: Facility[];
    charges: RoomCharges[];
}