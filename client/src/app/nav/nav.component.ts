import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor(public accountService : AccountService) { }

  ngOnInit(): void {

  }

  login(){
    this.accountService.login(this.model).subscribe( data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  logout(){
    this.accountService.logout();

  }



}
