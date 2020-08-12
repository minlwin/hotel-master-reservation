import { RoomTypeService } from './../../../../../../model/service/room-type.service';
import { Hotel } from './../../../../../../model/dto/hotel';
import { HotelService } from './../../../../../../model/service/hotel.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit {

  roomTypeForm: FormGroup;
  hotels: Hotel[]

  constructor(private fb: FormBuilder, private hotelService: HotelService
    , private roomTypeService: RoomTypeService) { }

  ngOnInit(): void {
    this.hotelService.findAll().subscribe(hotels => this.hotels = hotels)
    this.initForm();
  }

  get roomTypeFacilities() {
    return this.roomTypeForm.get('facilities') as FormArray
  }

  subFacilities(parentIndex) {
    return this.roomTypeFacilities.controls[parentIndex].get('facilities') as FormArray;
  }

  addFacility() {
    this.roomTypeFacilities.push(this.fb.group({
      title: [''],
      logo: [''],
      facilities: this.fb.array([]),

    }))
  }

  addSubFacility(parentIndex) {
    this.subFacilities(parentIndex).push(this.fb.control(''))
  }

  removeFacility(index) {
    this.roomTypeFacilities.removeAt(index)
  }

  removeSubFacility(parentIndex, childIndex) {
    this.subFacilities(parentIndex).removeAt(childIndex)
  }
  get roomCharges() {
    return this.roomTypeForm.get('charges') as FormArray
  }

  addroomcharges() {
    this.roomCharges.push(this.fb.group({
      charges: [''],
      currency: [''],
      nationality: [''],
      type: [''],
    }))
  }
  removeCharges(i) {
    this.roomCharges.removeAt(i);
  }


  private initForm() {
    this.roomTypeForm = this.fb.group({
      hotel: null,
      name: ['', Validators.required],
      bedType: ['', Validators.required],
      beds: ['', Validators.required],
      facilities: this.fb.array([], Validators.required),
      charges: this.fb.array([], Validators.required)
    })
  }

  save() {
    console.log(this.roomTypeForm.value)
    this.roomTypeService.save(this.roomTypeForm.value).subscribe(() => this.roomTypeForm.reset())
  }


}
