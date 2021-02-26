import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-forum',
  templateUrl: './home-forum.component.html',
  styleUrls: ['./home-forum.component.scss'],
})
export class HomeForumComponent implements OnInit {

  items = [
    {
      date: '18/02/2020',
      name: 'Alcool - Tabac Drogues',
      comments: 203,
    },
    {
      date: '17/02/2020',
      name: 'Cardiologie et circulation',
      comments: 12,
    },
    {
      date: '16/02/2020',
      name: 'Diététique - Régimes',
      comments: 45,
    },
    {
      date: '16/02/2020',
      name: 'Endocrinologie - Diabète',
      comments: 34,
    },
    {
      date: '15/02/2020',
      name: 'Environnement et santé',
      comments: 85,
    },
    {
      date: '11/02/2020',
      name: 'Fatigue chronique',
      comments: 91,
    },
    {
      date: '10/02/2020',
      name: 'Fibromyalgie',
      comments: 12,
    },
    {
      date: '10/02/2020',
      name: 'Gastro-entérologie',
      comments: 4,
    },
    
  ];

  constructor() { }

  ngOnInit() {}

}
