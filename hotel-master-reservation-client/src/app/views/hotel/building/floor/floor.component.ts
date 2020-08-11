import { RoomService } from './../../../../model/service/room.service';
import { Floor, Building } from './../../../../model/dto/building';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {

  building: Building;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.building = history.state.building
  }
 
  onSelectFloor(floor){
    this.roomService.floorChanged.next(floor);
  }
}
