import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{

  constructor(private http:HttpClient) {}

  ngOnInit() {

  }
}
