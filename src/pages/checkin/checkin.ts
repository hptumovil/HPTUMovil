import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the CheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html',
})
export class CheckinPage {

  url: string = 'https://sgrc-hptu.patientsafety.com/webframe/modules/mod_meldingen/FormController.php?form_id=a412028d-903d-f004-6dab-c5207267ace7';

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppbrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinPage');    
  }

  openWebpage(){
    //Setup options
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'yes',
      hardwareback: 'yes'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppbrowser.create(this.url, '_self', options);      
  }

}
