import { CommonUtils } from './../../model/common/common-utils';
import { HotelService } from './../../model/service/hotel.service';
import { Hotel } from './../../model/dto/hotel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  
  hotels: Hotel[];

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelService.findAll().subscribe(hotels => this.hotels = hotels)
  }

  getRankStar(rank: number){
    return CommonUtils.convertNumberToStarEmoji(rank);
  }

}
