import { Hotel } from './../../../../model/dto/hotel';
import { RoomType } from './../../../../model/dto/room-type';
import { RoomTypeService } from './../../../../model/service/room-type.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit {

  @Input() hotel: Hotel;
  roomTypes: RoomType[];

  constructor(private roomTypeService: RoomTypeService) { }

  ngOnInit(): void {
    this.roomTypeService.findAll().subscribe(
      roomTypes => this.roomTypes = roomTypes
    )
  }

}
