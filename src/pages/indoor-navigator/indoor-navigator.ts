import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IndoorNavigatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-indoor-navigator',
  templateUrl: 'indoor-navigator.html',
})
export class IndoorNavigatorPage {
  show: boolean = false;

  myColor: string = 'secondary';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndoorNavigatorPage');
  }

}
