import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit {
 
  hotelForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  get hotelFacilities(){
    return this.hotelForm.get('facilities') as FormArray
  }

  subFacilities(parentIndex){
    return this.hotelFacilities.controls[parentIndex].get('facilities') as FormArray;
  }

  addFacility(){
    this.hotelFacilities.push(this.fb.group({
      title: [''],
      logo: [''],
      facilities: this.fb.array([]),
      
    }))
  }

   addSubFacility(parentIndex){
    this.subFacilities(parentIndex).push(this.fb.control(''))
  }

  removeFacility(index){
    this.hotelFacilities.removeAt(index)
  }

  removeSubFacility(parentIndex, childIndex){
    this.subFacilities(parentIndex).removeAt(childIndex)
  }
get roomCharges(){
  return this.hotelForm.get('charges') as FormArray
}

addroomcharges(){
  this.roomCharges.push(this.fb.group({
    charges:[''],
    currency:[''],
    nationality:[''],
    type:[''],
    
  }))
}
removeCharges(i){
 
  this.roomCharges.removeAt(i);
}
  

  private initForm(){
    this.hotelForm = this.fb.group({
      code: ['',Validators.required],
      name: ['',Validators.required],
      bedType:['',Validators.required],
      beds:['',Validators.required],
      // hotel:'',
      facilities: this.fb.array([],Validators.required),
      charges: this.fb.array([],Validators.required)
    })
  }
  
  save() {
    console.log(this.hotelForm.value);
  }
  

}
