import { BuildingService } from './../../../../model/service/building.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/dto/hotel';
import { HotelService } from 'src/app/model/service/hotel.service';

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.css']
})
export class BuildingFormComponent implements OnInit {

  hotel: Hotel;
  building: any;

  constructor(private hotelService: HotelService, private buildingService: BuildingService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.hotel = history.state.hotel
    this.building = history.state.building

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

    building.hotel = this.hotel;
    this.buildingService.save(building).subscribe(() => this.router.navigate(['../../'], { relativeTo: this.route }))
  }
}
