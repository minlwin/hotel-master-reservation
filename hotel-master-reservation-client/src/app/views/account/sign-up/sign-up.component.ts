import { Account } from './../../../model/dto/account';
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    
  }

  singup(SignUpForm){
        console.log(SignUpForm)
  
  }
  
}
