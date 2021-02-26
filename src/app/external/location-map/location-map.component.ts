import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent, Marker } from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss'],
})
export class LocationMapComponent implements OnInit {
  map: GoogleMap;
  locationInput = '';

  constructor(
    private platform: Platform,
    private router:Router,
  ) { }

  async ngOnInit() {
    if(this.platform.is('cordova')){
      await this.loadMap();
    }
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       },
       controls:{
         zoom:false,
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      //title: 'Ionic',
      //icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

  onClickContinue(){
    this.router.navigate(['home'])
  }
}
