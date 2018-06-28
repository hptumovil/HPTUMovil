import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';

import { Items } from '../../providers/providers';

/**
 * Generated class for the PhysicianDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-physician-detail',
  templateUrl: 'physician-detail.html',
})
export class PhysicianDetailPage {
  physician: any;

  //Url to redirect
  url: string = 'https://www.hptu.org.co/';

  constructor(public navCtrl: NavController, public navParams: NavParams, items: Items, private inAppbrowser: InAppBrowser, private emailComposer: EmailComposer,) {
    this.physician = navParams.get('medico') || items.defaultItem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhysicianDetailPage');
  }

  //Method that open the HPTU portal
  goToWebPortal(){
    const options: InAppBrowserOptions = {
      zoom: 'yes',
      location: 'yes',
      hardwareback: 'yes',
      footer: 'yes'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppbrowser.create(this.url, '_system', options);

  }

  //Method that open the mail client in the user's phone with the physician email in the recipient
  sendEmail(){
    this.emailComposer.isAvailable().then(
      (available: boolean) => {
        if (available) {
          console.log("available");
        }else{
          console.log("no hay correo");
        }
      }
    );

    let email = {
      to: this.physician.email,
      subject: 'Mail from HPTU movil',
      body: "",
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);


  }
}
