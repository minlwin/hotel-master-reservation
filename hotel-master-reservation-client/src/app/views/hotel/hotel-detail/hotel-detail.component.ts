import { HotelService } from './../../../model/service/hotel.service';
import { CommonUtils } from './../../../model/common/common-utils';
import { Hotel } from './../../../model/dto/hotel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  
  hotel: Hotel

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
   this.hotel = history.state.hotel
   this.hotelService.currentHotel = this.hotel
  }

  
  getRankStar(rank: number){
    return CommonUtils.convertNumberToStarEmoji(rank);
  }
}
