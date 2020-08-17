import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../model/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  errorMessage: string;

  constructor(private authService: AuthService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  signIn(signInForm: NgForm){
    this.errorMessage = null;
    this.authService.login(signInForm.value).subscribe({
      error: error => this.errorMessage = 'Login ID or Password Incorrect. Please try again!!!',
      complete: () => {
        this.router.navigate([this.authService.activeUrl]);
        this.authService.activeUrl = null;
      },
    });

    signInForm.reset();
  }

}
