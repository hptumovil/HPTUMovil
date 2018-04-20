import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { servicioMedico } from '../../models/servicioMedico'

/**
 * Generated class for the AppointmentsGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointments-group',
  templateUrl: 'appointments-group.html',
})
export class AppointmentsGroupPage {
  services: any;
  category: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.services = navParams.get('services');
    this.category = navParams.get('category');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsGroupPage');
  }

  /**
   * Navigate to the detail page for this item.
   */
  openForm(service: servicioMedico) {

    if (service.RequiereCita) {
      this.navCtrl.push('AppointmentsFormPage', { service: service })
    } else {
      this.navCtrl.push('AppointmentsMessagePage', { service: service });
    }
  }

}
