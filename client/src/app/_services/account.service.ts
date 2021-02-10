import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit{
  baseUrl = 'https://localhost:5001/api/'

  constructor(private http:HttpClient) {}

  ngOnInit() {
  }

  login(model:any){
    return this.http.post(`${this.baseUrl}account/login`, model);
  }

  getUsers() : Observable<any>{
    return this.http.get(`${this.baseUrl}users`)
  }
}
