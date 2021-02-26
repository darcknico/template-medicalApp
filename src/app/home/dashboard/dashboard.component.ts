import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {}

  onClickAppointments(){
    this.router.navigate(['appointments']);
  }

  onClickRecords(){
    this.router.navigate(['records','list']);
  }

  onClickForums(){
    this.router.navigate(['forum']);
  }

  onClickAccount(){
    this.router.navigate(['pages','settings']);
  }
}
