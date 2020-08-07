import { Injectable } from '@angular/core';
import { BaseService } from '../common/base.service';
import { ROOM_API } from '../common/api-constants';
import { Room } from '../dto/room';

@Injectable({
  providedIn: 'root'
})

export class RoomService extends BaseService<Room>{
  
  protected url(): string {
    return ROOM_API;
  }
  
}