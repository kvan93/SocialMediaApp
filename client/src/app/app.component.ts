import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Social Media App';
  users: any;
  constructor(private _accountService:AccountService) {

  }

  ngOnInit(){
   this.getUsers()
  }

  getUsers(){
    this._accountService.getUsers().subscribe(response => {
      this.users = response;
    }, error => {
      console.error(error);
    })
  }


}
