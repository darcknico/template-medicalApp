import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-records',
  templateUrl: './list-records.component.html',
  styleUrls: ['./list-records.component.scss'],
})
export class ListRecordsComponent implements OnInit {

  items = [
    {
      date:'18/02/2020',
      name: 'Dentist - Clara Odding',
    },
    {
      date:'01/02/2020',
      name: 'Dermatologist - Noemi Shinte',
    },
    {
      date:'15/11/2019',
      name: 'Cardiologist - Steven Pauliner',
    },
    {
      date:'14/10/2019',
      name: 'Ginecologist - Chiara Uber',
    },
    {
      date:'02/09/2019',
      name: 'Orthopedic - Stefano Lanza',
    },
    {
      date:'01/09/2019',
      name: 'Psychiatrist - Giovanna Conte',
    },
    {
      date:'06/06/2019',
      name: 'Dentist - Clara Odding',
    },
    {
      date:'02/09/2019',
      name: 'General Practitioner - Martina  Garnier',
    },
  ]
  constructor() { }

  ngOnInit() {}

}
