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
    this.authService.activeUrl = this.router.url
    this.router.navigate(['/sign-in']);

  }
  signOut(){
    this.authService.logOut();
    this.router.navigate(['/hotel'])
  }
}
