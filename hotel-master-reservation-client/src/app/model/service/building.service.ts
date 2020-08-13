import { Building } from './../dto/building';
import { BUILDING_API } from './../common/api-constants';
import { BaseService } from "../common/base.service";

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BuildingService extends BaseService<Building>{
    protected url(): string {
       return BUILDING_API;
    }

    findByHotelCode(hotelCode){
        return this.http.get<Building[]>(this.url(), {
            params: {hotelCode}
        })
    }
}