import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.component.html',
  styleUrls: ['./payment-confirm.component.scss'],
})
export class PaymentConfirmComponent implements OnInit {

  slideOptsCreditCard = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.2,
    spaceBetween: 10
  };

  cards = [
    {
      state: 'ON',
      logo: "assets/img/visa.png",
      a: 1234,
      b: 5522,
      c: 8432,
      d: 2264,
      expires: '7/12',
      bank: 'Bank of America'
    },
    {
      state: 'OFF',
      logo: "assets/img/american.png",
      a: 1234,
      b: 5321,
      c: 8283,
      d: 9271,
      expires: '8/19',
      bank: 'JPMorgan'
    },
    {
      state: 'ON',
      logo: "assets/img/mastercard.png",
      a: 8685,
      b: 2445,
      c: 9143,
      d: 7846,
      expires: '11/23',
      bank: 'CityBank'
    }
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  onClickContinue(){
    this.router.navigate(['appointments','payment','approved']);
  }
}
