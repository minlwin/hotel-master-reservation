import { Floor } from './../../../../../../model/dto/building';
import { RoomService } from './../../../../../../model/service/room.service';
import { ImageUploadService } from './../../../../../../model/service/image-upload.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormBuilder} from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

declare let $:any;

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  floor: Floor;

  photos: String[] = [];
  roomForm: FormGroup;

  constructor(private fb: FormBuilder,private uploadService: ImageUploadService,
    private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {

    this.roomService.floorChanged.subscribe(floor => this.floor = floor)

    this.roomForm = this.fb.group({
      name: [''],
      photo: [''],
      others: this.fb.array([])
    })
  }

  get othersControl() {
    return this.roomForm.get('others') as FormArray;
  }

  removeOther(index:number){
    this.othersControl.removeAt(index)

  }
  addOther(){
    this.othersControl.push(this.fb.control(''))
  }

  preview(files: File[]){
    this.photos = [];
    [...files].forEach(file => this.readFile(file))
  }

  private readFile(file: File){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => this.photos.push(reader.result as string);
  }

  save(files: File[]) {
    let room = this.roomForm.value;
    let other = {};
    let otherValues = this.roomForm.value.others as Array<string>;

    for (let i = 0; i < otherValues.length; i++) other[i] = otherValues[i];

    console.log(room)
    $('#modalAddNewRoom').modal('hide');

    // forkJoin(...[...files].map(file => this.uploadService.upload(file)))
    //   .pipe(switchMap(photos => {
    //     room.photos = photos;
    //     room.others = other;
    //     console.log(room)
    //     return this.roomService.save(room)
    //   })).subscribe(data => this.router.navigate(['/hotel']))
  }
  

}
