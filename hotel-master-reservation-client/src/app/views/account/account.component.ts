import { AccountService } from './../../model/service/account.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
    roles = ['Admin', 'Manager', 'Staff', 'Agent', 'Customer'];
    accounts: Account[]

    login: string;
    role: string;

    constructor(private accountService: AccountService){}

    ngOnInit(){
        this.accountService.findAll().subscribe(accounts => this.accounts = accounts)
    }
}