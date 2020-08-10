import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
   
  }
  
  showForm(modalId) {
    $(modalId).modal('show');
  }

}
