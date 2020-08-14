import { RoomType } from './../../../../../model/dto/room-type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-type-detail',
  templateUrl: './room-type-detail.component.html',
  styleUrls: ['./room-type-detail.component.css']
})
export class RoomTypeDetailComponent implements OnInit {

  @Input() roomType: RoomType;

  constructor() { }

  ngOnInit(): void {
    
  }

}
