import { Floor } from './../dto/building';
import { Injectable } from '@angular/core';
import { BaseService } from '../common/base.service';
import { ROOM_API } from '../common/api-constants';
import { Room } from '../dto/room';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RoomService extends BaseService<Room>{

  floorChanged = new Subject<Floor>()

  protected url(): string {
    return ROOM_API;
  }
  
  findByFloor(floor: Floor){
    return this._cache.filter(room => room.floor.code === floor.code)
  }
}