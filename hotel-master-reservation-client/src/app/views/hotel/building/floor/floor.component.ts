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
  currentIndex: number;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.building = history.state.building
    this.roomService.floorChanged.next(this.building.floors[0])
  }
 
  onSelectFloor(index, floor){
    this.currentIndex = index;
    this.roomService.floorChanged.next(floor);
  }
}
