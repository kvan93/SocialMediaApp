import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerMode:boolean = false;
  users:any;

  constructor(private http:HttpClient, private _accountService:AccountService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  getUsers(){
    this._accountService.getUsers().subscribe(users => this.users = users);
  }

  cancelRegisterMode(event:boolean){
    this.registerMode = event;
  }

}
