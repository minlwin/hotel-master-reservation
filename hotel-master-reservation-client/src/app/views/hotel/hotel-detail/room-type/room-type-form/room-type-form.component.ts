import { HotelService } from 'src/app/model/service/hotel.service';
import { switchMap } from 'rxjs/operators';
import { ImageUploadService } from './../../../../../model/service/image-upload.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  hotel: Hotel;
  photos: string[] = [];
  hotels: Hotel[];

  constructor(private fb: FormBuilder, private uploadService: ImageUploadService, private hotelService: HotelService,
    private roomTypeService: RoomTypeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.hotel = history.state.hotel

    this.hotelService.findAll().subscribe(hotels => this.hotels = hotels)

    this.initForm();
  }

  get roomTypeFacilities() {
    return this.roomTypeForm.get('facilities') as FormArray
  }

  preview(files: File[]) {
    this.photos = [];
    [...files].forEach(file => this.readFile(file))
  }

  private readFile(file: File) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => this.photos.push(reader.result as string);
  }

  get facilities(){
    return this.roomTypeForm.get('facilities') as FormArray
  }

  addFacility(){
    this.facilities.push(this.fb.control(''))
  }

  removeFacility(index){
    this.facilities.removeAt(index);
  }

  get roomCharges() {
    return this.roomTypeForm.get('charges') as FormArray
  }

  addroomcharges() {
    this.roomCharges.push(this.fb.group({
      charges: [''],
      currency: [''],
      type: [''],
    }))
  }
  removeCharges(i) {
    this.roomCharges.removeAt(i);
  }


  private initForm() {
    this.roomTypeForm = this.fb.group({
      hotel: [this.hotel],
      name: ['', Validators.required],
      bedType: ['', Validators.required],
      beds: ['', Validators.required],
      facilities: this.fb.array([], Validators.required),
      charges: this.fb.array([], Validators.required)
    })
  }

  save(files: File[]) {
    let roomType = this.roomTypeForm.value;
    this.uploadService.upload(...files).pipe(
      switchMap(
        photos => {
          roomType.photos = photos;
          return this.roomTypeService.save(roomType)
        }
      )
    ).subscribe(rt => this.router.navigate(['/hotel', rt.hotel.code]))
  }
}
