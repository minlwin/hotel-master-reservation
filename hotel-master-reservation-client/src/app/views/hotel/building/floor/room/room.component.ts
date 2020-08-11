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

  constructor(private roomService: RoomService) { }

  ngOnInit(){
    this.roomService.floorChanged.subscribe(
      floor => this.floor = floor
    )
  }

  showModal(modalId){
    $(modalId).modal('toggle')
  }
}
