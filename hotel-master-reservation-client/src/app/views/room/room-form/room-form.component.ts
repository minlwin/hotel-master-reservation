import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  roomForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

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
    this.othersControl.push(this.fb.group({
      otherName: [''],
      otherDesc: ['']
    }))
  }

  save() {
    console.log(this.roomForm.value)
    this.roomForm.reset;
  }

}
