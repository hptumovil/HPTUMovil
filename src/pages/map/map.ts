import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://www.joshmorony.com/implementing-turn-by-turn-navigation-with-google-maps-in-ionic/
 * for more info on Google maps and navigation.
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

  subscription: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.showMap();
    this.startNavigating();
  }
  //Stop watch the position when exit this page
  ionViewWillLeave() {
    navigator.geolocation.clearWatch(this.subscription);
  }

  //Method that draw map
  showMap() {
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

  // Method that wacth the position and calculates the route
  startNavigating() {

    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    //Get the current location from the device
    if (navigator.geolocation) {
      var options = {
        enableHighAccuracy: true
      };
      //Instatiates the watchPosition object and save the objects's id in this.subscription
      this.subscription = navigator.geolocation.watchPosition(position => {
        console.info('using navigator');
        console.info(position.coords.latitude);
        console.info(position.coords.longitude);

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
