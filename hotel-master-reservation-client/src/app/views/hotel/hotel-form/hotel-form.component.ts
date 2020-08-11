import { HotelService } from './../../../model/service/hotel.service';
import { ImageUploadService } from './../../../model/service/image-upload.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { forkJoin } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {

  hotelForm: FormGroup;
  photos: string[] = [];
  pIndex: number;



  constructor(private fb: FormBuilder, private router: Router, private uploadService: ImageUploadService,
    private hotelService: HotelService) { }

  ngOnInit(): void {

    this.intiForm()
  
  }

  private intiForm() {
    this.hotelForm = this.fb.group({
      name: [''],
      ranking: [''],
      description: [''],
      location: [''],
      facilities: this.fb.array([])
    })
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
  get hotelFacilities() {
    return this.hotelForm.get('facilities') as FormArray
  }

  subFacilities(parentIndex) {
    return this.hotelFacilities.controls[parentIndex].get('facilities') as FormArray;
  }

  addFacility() {
    this.hotelFacilities.push(this.fb.group({
      title: [''],
      logo: [''],
      facilities: this.fb.array([])
    }))
  }

  addSubFacility(parentIndex) {
    this.subFacilities(parentIndex).push(this.fb.control(''))
  }

  removeFacility(index) {
    this.hotelFacilities.removeAt(index)
  }

  removeSubFacility(parentIndex, childIndex) {
    this.subFacilities(parentIndex).removeAt(childIndex)
  }

  save(files: File[]){
    this.uploadService.upload(...files)
      .pipe(switchMap(photos => {
        let hotel = this.hotelForm.value;
        hotel.photos = photos;
        return this.hotelService.save(hotel)
      })).subscribe(data => this.router.navigate(['/hotel']))
  }

}
