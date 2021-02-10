import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn:boolean;

  constructor(private _accountService : AccountService) { }

  ngOnInit(): void {
  }

  login(){
    this._accountService.login(this.model).subscribe( data => {
      console.log(data);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    })
  }

  logout(){
    this.loggedIn = false;
  }

}
