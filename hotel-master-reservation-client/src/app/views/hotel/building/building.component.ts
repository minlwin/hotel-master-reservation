import { Building } from './../../../model/dto/building';
import { BuildingService } from './../../../model/service/building.service';
import { HotelService } from './../../../model/service/hotel.service';
import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/dto/hotel';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit{

  buildings: Building[];

  constructor(private buildingService: BuildingService){}

  ngOnInit(){
    this.buildingService.findAll().subscribe(buildings => this.buildings = buildings)
  }
}
