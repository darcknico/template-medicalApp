import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  locationInput = '';

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {}

  onClickContinue(){
    this.router.navigate(['external','map'])
  }

  onClickClear(){
    this.locationInput = '';
  }

}
