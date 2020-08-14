import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../model/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  singin(formData){
    this.authService.login(formData).subscribe({
      next: next => this.router.navigate(['/hotel']),
    });
  }

}
