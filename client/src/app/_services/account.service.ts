import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit{
  baseUrl = 'https://localhost:5001/api/'
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http:HttpClient) {}

  ngOnInit() {
  }

  login(model:any){
    return this.http.post(`${this.baseUrl}account/login`, model).pipe(
      map((response:User) => {
        const user = response;
        if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model:any){

  }

  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  getUsers() : Observable<any>{
    return this.http.get(`${this.baseUrl}users`);
  }
}
