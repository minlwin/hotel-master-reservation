import { Account } from './../../../model/dto/account';
import { Router } from '@angular/router';
import { AccountService } from './../../../model/service/account.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  roles = ['Admin', 'Manager', 'Staff', 'Agent', 'Customer']
  account: Account;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.account = history.state.account;
  }

  singup(signUpForm: NgForm){
    if(this.account) signUpForm.value.login = this.account.login
     this.accountService.save(signUpForm.value).subscribe(() => {
       this.account = null;
       signUpForm.reset();
       this.router.navigate(['/account'])
     });
  }
  
}
