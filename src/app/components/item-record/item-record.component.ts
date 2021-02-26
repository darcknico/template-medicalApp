import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-record',
  templateUrl: './item-record.component.html',
  styleUrls: ['./item-record.component.scss'],
})
export class ItemRecordComponent implements OnInit {

  @Input('item') item;
  
  constructor() { }

  ngOnInit() {}

}
