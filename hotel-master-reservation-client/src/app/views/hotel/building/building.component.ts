import { Building } from './../../../model/dto/building';
import { BuildingService } from './../../../model/service/building.service';
import { HotelService } from './../../../model/service/hotel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit{

  buildings: Building[];


  constructor(private buildingService: BuildingService, private hotelSerivce: HotelService){}

  ngOnInit(){
    this.buildingService.findAll().subscribe(buildings => {
      this.buildings = buildings.filter(b => b.hotel.code === this.hotelSerivce.currentHotel.code)
    })
  }
}
