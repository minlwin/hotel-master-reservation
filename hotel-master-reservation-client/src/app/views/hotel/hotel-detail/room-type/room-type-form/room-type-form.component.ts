import { Router, ActivatedRoute } from '@angular/router';
import { HotelService } from './../../../../../model/service/hotel.service';
import { RoomTypeService } from './../../../../../model/service/room-type.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Hotel } from '../../../../../model/dto/hotel';

@Component({
  selector: 'app-room-type-form',
  templateUrl: './room-type-form.component.html',
  styleUrls: ['./room-type-form.component.css']
})
export class RoomTypeFormComponent implements OnInit {

  roomTypeForm: FormGroup;
  hotel: Hotel

  constructor(private fb: FormBuilder,
    private roomTypeService: RoomTypeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
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
      name: ['', Validators.required],
      bedType: ['', Validators.required],
      beds: ['', Validators.required],
      facilities: this.fb.array([], Validators.required),
      charges: this.fb.array([], Validators.required)
    })
  }

  save() {
    let roomType = this.roomTypeForm.value;
    roomType.hotel = this.hotel;
    this.roomTypeService.save(roomType).subscribe(() => {
      this.roomTypeForm.reset();
      this.router.navigate(['../../'], {relativeTo: this.route})
    })
  }


}
