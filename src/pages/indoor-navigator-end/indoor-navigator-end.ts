import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IndoorNavigatorEndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-indoor-navigator-end',
  templateUrl: 'indoor-navigator-end.html',
})
export class IndoorNavigatorEndPage {
  location1: string;
  locations: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.location1 = navParams.get('location1');
    this.locations = navParams.get('locations');
    this.locations = this.locations;
    //console.info(this.location1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndoorNavigatorEndPage');
  }

  /**
   * Navigate to the end page for the start location.
   */
  openItem(location: Location) {
    this.navCtrl.push('IndoorNavigatorPage', {
      location1: this.location1,
      location2: location
    });
  }

}
