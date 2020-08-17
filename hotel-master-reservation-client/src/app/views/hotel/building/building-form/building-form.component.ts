import { BuildingService } from './../../../../model/service/building.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/dto/hotel';
import { HotelService } from 'src/app/model/service/hotel.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.css']
})
export class BuildingFormComponent implements OnInit {

  hotel: Hotel;
  building: any;
  hotels: Hotel[];

  constructor(private hotelService: HotelService, private buildingService: BuildingService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.hotel = history.state.hotel
    this.building = history.state.building

    this.hotelService.findAll().subscribe(hotels => this.hotels = hotels)

    if(this.building)
      this.hotel = this.building.hotel
  }

  save(formValue){
    let building = formValue;
     building.floors = [];

    for(let i =1; i <= building.floor; i ++){
        building.floors.push({
          name: 'FL-' + i,
        })
    }
    
    if(this.building) building.code = this.building.code

    this.buildingService.save(building).subscribe(b => this.router.navigate(['/hotel', b.hotel.code]))
  }
}
