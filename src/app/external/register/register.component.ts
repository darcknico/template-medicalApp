import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  countryCode = '39';
  mobileNumber = '';

  constructor(
    private router:Router,
    private fb:FormBuilder,
  ) { }

  ngOnInit() {}

  onClickContinue(){
    this.router.navigate(['external','verification'])
  }

  onCancelMobile(){
    this.mobileNumber = '';
  }
}
