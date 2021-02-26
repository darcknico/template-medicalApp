import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-add',
  templateUrl: './feedback-add.component.html',
  styleUrls: ['./feedback-add.component.scss'],
})
export class FeedbackAddComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  onClickContinue(){
    this.router.navigate(['home']);
  }
}
