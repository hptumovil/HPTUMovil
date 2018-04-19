import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppointmentsMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointments-message',
  templateUrl: 'appointments-message.html',
})
export class AppointmentsMessagePage {

  title: string;
  service:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.service = navParams.get('service');
    this.title = this.service.Nombre;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsMessagePage');
  }

}
