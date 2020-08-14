import { AuthService } from './../../../../model/service/auth.service';
import { Hotel } from './../../../../model/dto/hotel';
import { RoomType } from './../../../../model/dto/room-type';
import { RoomTypeService } from './../../../../model/service/room-type.service';
import { Component, OnInit, Input } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit {

  @Input() hotel: Hotel;
  roomTypes: RoomType[];
  currentRoomType: RoomType;

  constructor(public authService: AuthService,private roomTypeService: RoomTypeService) { }

  ngOnInit(): void {
    this.roomTypeService.findByHotelCode(this.hotel.code)
      .subscribe(roomTypes => this.roomTypes = roomTypes)
  }

  showDetail(roomType){
    this.currentRoomType = roomType;
    $('#roomTypeDetailModal').modal('toggle')
  }
}
