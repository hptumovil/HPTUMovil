import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;

  //The GoogleMaps data for api conection goes here
  map: any;
  mapInitialised: boolean = false;  
  apiKey = 'AIzaSyAuYJr53z_ljCFv7iVbY5YX39HJOXMfIUo';

  constructor(public navCtrl: NavController, public navParams: NavParams, private network: Network, private geolocation: Geolocation) {    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.showMap();
    this.startNavigating();
  }

  showMap(){
    //location Lat & Long
    const location = new google.maps.LatLng(6.2770054, -75.5807295);    
    
    //Map options
     const options = {
      center: location,
      zoom: 15,
      streetViewControl: false,
      mapTypeId: 'roadmap'
    }
    
    //Create new Google Maps with center in Hospital Pablo Tobon Uribe
    this.map = new google.maps.Map(this.mapElement.nativeElement, options);    
  }
    

  startNavigating() {

    //Get the current location from the device
    if (navigator.geolocation) {
      var options = {
        enableHighAccuracy: true
      };
      navigator.geolocation.watchPosition(position => {
        console.info('using navigator');
        console.info(position.coords.latitude);
        console.info(position.coords.longitude);

        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;

        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);

        directionsService.route({
          origin: { lat: position.coords.latitude, lng: position.coords.longitude },
          destination: { lat: 6.2770054, lng: -75.5807295 },
          travelMode: google.maps.TravelMode['DRIVING']
        }, (res, status) => {

          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(res);
          } else {
            console.warn(status);
          }

        });        
      }, error => {
        console.log(error);
      }, options);
    }

  }
}
