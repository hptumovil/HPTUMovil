import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import * as habeasData from './habeas-data';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the DonatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class DonatePage {

  //URL to redirect
  url: string = 'https://www.zonapagos.com/t_hptubas/pagos.asp';
  habeasDataInfo = habeasData.habeasDataText;
  //habeas: FormGroup;
  //submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppbrowser: InAppBrowser) {
    //  this.habeas = formBuilder.group({terms: [false, Validators.pattern('true')]});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatePage');
  }

  //Method that open a browser in the mobil phone
  openWebpage() {
    //Set options
    const options: InAppBrowserOptions = {
      zoom: 'yes',
      location: 'yes',
      hardwareback: 'yes',
      footer: 'yes',
      toolbar: 'yes'
    }

    // Opening a URL and returning an InAppBrowserObject
    this.inAppbrowser.create(this.url, '_self', 'zoom=yes,location=no,hardwareback=no,footer=yes,toolbar=yes');
    //this.inAppbrowser.create(this.url, '_self', options);
  }

}
