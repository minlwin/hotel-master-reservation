import { Facility } from './facility';

export class Hotel{
    code: string;
    name: string;
    photos: string;
    location: string;
    description: string;
    ranking: number;
    phone: string;
    email: string;
    facilities: Facility[];
}