import { Hotel } from './../../../model/dto/hotel';
import { Building } from './../../../model/dto/building';
import { BuildingService } from './../../../model/service/building.service';
import { HotelService } from './../../../model/service/hotel.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit{

  buildings: Building[];
  @Input() hotel: Hotel;


  constructor(private buildingService: BuildingService, private hotelSerivce: HotelService){}

  ngOnInit(){
    this.buildingService.findByHotelCode(this.hotel.code)
      .subscribe(
        buildings => this.buildings = buildings
      )
  }
}
