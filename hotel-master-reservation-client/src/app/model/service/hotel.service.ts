import { HOTEL_API } from './../common/api-constants';
import { Hotel } from './../dto/hotel';
import { BaseService } from "../common/base.service";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HotelService extends BaseService<Hotel>{
   protected url(): string {
        return HOTEL_API;
    }
}