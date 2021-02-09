import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{

  constructor(private http:HttpClient) {}

  ngOnInit() {
  }

  getUsers() : Observable<any>{
    return this.http.get(`https://localhost:5001/api/users`)
  }
}
