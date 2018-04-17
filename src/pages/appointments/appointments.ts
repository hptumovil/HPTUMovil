import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentsFormPage } from '../appointments-form/appointments-form';

/**
 * Generated class for the AppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsPage');
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    // set val to the value of the searchbar
    let val = ev.target.value;    

    // if the value is an empty string don't filter the items
    if (!val || !val.trim()) {
      //this.initializeItems();
      return;
    }
    console.log(val)    
  }

  goTo(){
    this.navCtrl.push('AppointmentsFormPage')
  }

}
