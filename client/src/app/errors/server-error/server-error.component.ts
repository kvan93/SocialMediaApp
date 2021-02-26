import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {

  error:any;

  constructor(private _routr: Router) {
    const navigation = this._routr.getCurrentNavigation();
    this.error = navigation?.extras?.state?.error;
   }

  ngOnInit(): void {
  }

}
