import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Social Media App';
  users: any;
  constructor(private _userService:UsersService) {

  }

  ngOnInit(){
   this.getUsers()
  }

  getUsers(){
    this._userService.getUsers().subscribe(response => {
      this.users = response;
    }, error => {
      console.error(error);
    })
  }


}
