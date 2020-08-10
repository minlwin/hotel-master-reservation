import { BUILDING_API } from './../common/api-constants';
import { BaseService } from "../common/base.service";

import { Hotel } from './../dto/hotel';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BuildingService extends BaseService<{hotel: Hotel, name: string, type: string}>{
    protected url(): string {
       return BUILDING_API;
    }

}