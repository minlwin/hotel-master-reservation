import { ROOM_API, ROOM_TYPE_API } from './../common/api-constants';
import { BaseService } from "../common/base.service";
import { RoomType } from './../dto/room-type';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RoomTypeService extends BaseService<RoomType>{
    protected url(): string {
       return ROOM_TYPE_API;
    }

    findByHotelCode(hotelCode){
        return this.http.get<RoomType[]>(this.url(),{
            params: {hotelCode}
        })
    }
}