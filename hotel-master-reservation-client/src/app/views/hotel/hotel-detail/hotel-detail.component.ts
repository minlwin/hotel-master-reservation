import { AuthService } from './../../../model/service/auth.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(public authService: AuthService,private hotelService: HotelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      let code = params['code'];
      return this.hotelService.findById(code)
    })).subscribe(hotel => this.hotel = hotel)
  }


  getRankStar(rank: number) {
    return CommonUtils.convertNumberToStarEmoji(rank);
  }
}
