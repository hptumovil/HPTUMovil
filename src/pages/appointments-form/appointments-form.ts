import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ContentPage } from '../pages';

/**
 * Generated class for the AppointmentsFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointments-form',
  templateUrl: 'appointments-form.html',
})
export class AppointmentsFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsFormPage');
  }

  sendInfo() {
    //Let's show an alert that everything goes fine
    let alert = this.alertCtrl.create({
      title: 'Solicitud de cita enviada',
      subTitle: 'Gracias por confiar en nosotros. Usted será contactado en las próximas 24 horas hábiles para agendar su cita',
      buttons: ['OK']
    });
    alert.present();

    this.navCtrl.push(ContentPage);
  }

}
