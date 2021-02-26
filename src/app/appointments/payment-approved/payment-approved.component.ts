import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-approved',
  templateUrl: './payment-approved.component.html',
  styleUrls: ['./payment-approved.component.scss'],
})
export class PaymentApprovedComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  onClickContinue(){
    this.router.navigate(['appointments','feedback']);
  }
}
