import { AuthService } from './../../model/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService,private router:Router,private route :ActivatedRoute) { }
  ngOnInit(): void {
    
  }
  signIn(){
    this.router.navigate(['sign-in'],{relativeTo:this.route});

  }
  signUp(){
    this.router.navigate(['sign-up'],{relativeTo:this.route});
  }
}
