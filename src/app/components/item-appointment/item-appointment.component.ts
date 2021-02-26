import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-appointment',
  templateUrl: './item-appointment.component.html',
  styleUrls: ['./item-appointment.component.scss'],
})
export class ItemAppointmentComponent implements OnInit {

  @Input('item')item = {
    name: 'Dr. Clara odding',
    specialist: 'Dentist',
    address: 'Frisange - 3 km',
    stars: 2,
    reviews: 25,
  };
  @Input('type')type = 'list'; // list - view

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {}

  onClick(){
    this.router.navigate(['appointments','book']);
  }
}
