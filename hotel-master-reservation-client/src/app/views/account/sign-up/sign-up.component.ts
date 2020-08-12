import { AccountService } from './../../../model/service/account.service';
import { Account } from './../../../model/dto/account';
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    
  }

  singup(signUpForm: NgForm){
      this.accountService.save(signUpForm.value).subscribe(() => signUpForm.reset());
  }
  
}
