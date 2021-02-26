import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-appointments',
  templateUrl: './book-appointments.component.html',
  styleUrls: ['./book-appointments.component.scss'],
})
export class BookAppointmentsComponent implements OnInit {

  item = {
    name: 'Dr. Clara odding',
    specialist: 'Dentist',
    address: 'Frisange - 3 km',
    stars: 2,
    reviews: 25,
  };

  slideOptsSchedule = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.4,
    spaceBetween: 10
  };

  schedules = [
    {
      day:'Thu, 09 Apr',
      slots: [ '8:00', '12:00', '15:00' ],
    },
    {
      day:'Fri, 10 Apr',
      slots: [ '9:00', '13:00', '16:00' ],
    },
    {
      day:'Mon, 13 Apr',
      slots: [ '8:00', '12:00' ],
    }
  ]

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {}

  onClickContinue(){
    this.router.navigate(['appointments','payment']);
  }
}
