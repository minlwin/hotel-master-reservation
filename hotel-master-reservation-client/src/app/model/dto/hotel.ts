import { Facility } from './facility';
export class Hotel{
    code: string;
    name: string;
    photo: string;
    location: string;
    description: string;
    ranking: string;
    facilities: Facility[];
}