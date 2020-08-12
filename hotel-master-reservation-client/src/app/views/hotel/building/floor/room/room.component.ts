import { Room } from './../../../../../model/dto/room';
import { RoomService } from './../../../../../model/service/room.service';
import { Floor } from './../../../../../model/dto/building';
import { Component, OnInit, Input, DoCheck } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{

  floor: Floor;
  rooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit(){
    this.fetchRoom();
    this.roomService.floorChanged.subscribe(
      floor => {
        this.floor = floor;
        this.fetchRoom();
      }
    )
  }

  showModal(modalId){
    $(modalId).modal('toggle')
  }

  fetchRoom(){
    this.roomService.findAll().subscribe(rooms => this.rooms = rooms.filter(room => room.floor.code === this.floor?.code))
  }
}
