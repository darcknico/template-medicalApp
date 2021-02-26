import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.scss'],
})
export class ListAppointmentsComponent implements OnInit {

  items = [
    {
      name: 'Dr. Martin Piller',
      specialist: 'Cardiologist',
      address: 'Luxembourg Ville - 2 km',
      stars: 3,
      reviews: 213,
    },
    {
      name: 'Dr. Clara odding',
      specialist: 'Dentist',
      address: 'Frisange - 3 km',
      stars: 2,
      reviews: 25,
    },
    {
      name: 'Dr. Julien More',
      specialist: 'Psychiarist',
      address: 'Mamer - 10 km',
      stars: 5,
      reviews: 456,
    },
    {
      name: 'Dr. Jeff Smiths',
      specialist: 'Dermatologist',
      address: 'Roeser - 4 km',
      stars: 1,
      reviews: 25,
    },
  ]

  constructor() { }

  ngOnInit() {}

}
