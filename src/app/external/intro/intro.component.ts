import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  @ViewChild('pageSlider')  pageSlider: IonSlides;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {}

  async swipeNext(){
    if(await this.pageSlider.isEnd()){
      this.onClickSkip();
    } else {
      this.pageSlider.slideNext();
    }
  }
  onClickSkip(){
    this.router.navigate(['external','login']);
  }
}
