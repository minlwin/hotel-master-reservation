import { RoomType } from './../../../../../../model/dto/room-type';
import { RoomTypeService } from './../../../../../../model/service/room-type.service';
import { Floor } from './../../../../../../model/dto/building';
import { RoomService } from './../../../../../../model/service/room.service';
import { ImageUploadService } from './../../../../../../model/service/image-upload.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  floor: Floor;
  roomForm: FormGroup;
  roomTypes: RoomType[];

  @Output() createdRoom = new EventEmitter();

  constructor(private fb: FormBuilder,
    private roomService: RoomService, private roomTypeService: RoomTypeService, private router: Router) { }

  ngOnInit(): void {
    this.roomService.floorChanged.subscribe(floor => this.floor = floor)
    this.roomTypeService.findAll().subscribe(roomTypes => this.roomTypes = roomTypes)

    this.roomForm = this.fb.group({
      name: [''],
      roomType: null,
      others: this.fb.array([])
    })
  }

  get othersControl() {
    return this.roomForm.get('others') as FormArray;
  }

  removeOther(index: number) {
    this.othersControl.removeAt(index)

  }
  addOther() {
    this.othersControl.push(this.fb.control(''))
  }

  save() {
    let room = this.roomForm.value;
    let other = {};
    let otherValues = this.roomForm.value.others as Array<string>;

    for (let i = 0; i < otherValues.length; i++) other[i] = otherValues[i];

    room.others = other;
    room.floor = this.floor;
    this.roomService.save(room).subscribe(() => {
      this.roomForm.reset();
      this.createdRoom.emit();
      $('#modalAddNewRoom').modal('hide');
    })
  }
}
