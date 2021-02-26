import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-forum',
  templateUrl: './item-forum.component.html',
  styleUrls: ['./item-forum.component.scss'],
})
export class ItemForumComponent implements OnInit {
  
  @Input('item') item;

  constructor() { }

  ngOnInit() {}

}
