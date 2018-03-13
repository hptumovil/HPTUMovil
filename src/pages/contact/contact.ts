import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { ContentPage } from '../pages';
import { CallNumber } from '@ionic-native/call-number';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  contactUsForm: FormGroup;
  submitAttempt: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private callNumber: CallNumber, public alertCtrl: AlertController, private restProvider: RestProvider) {
    this.contactUsForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: [''],
      message: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  //Method tha send the info in the form, to a server
  sendInfo() {
    //this verify if the form is empty, or it if wasn't type correctly
    if (!this.contactUsForm.valid) {
      this.submitAttempt = true;
      //Let's show an alert that something went wrong
      let alert = this.alertCtrl.create({
        title: 'No se pudo Enviar el mensaje',
        subTitle: 'Losentimos, hubo un error mientras se enviaba el mensaje, por favor intente mas tarde',
        buttons: ['OK']
      });
      alert.present();
      console.log("fail! Info ")
    }
    else {
      console.log("All data was entered correctly!")
      console.log(this.contactUsForm.value);

      try {
        this.restProvider.sendMessage(this.contactUsForm.value);
      } catch (error) {
        console.error(error)
      }
      //Let's show an alert that everything goes fine
      let alert = this.alertCtrl.create({
        title: 'Mensaje Enviado!',
        subTitle: 'Tu mensaje ha sido enviado exitosamente.',
        buttons: ['OK']
      });
      alert.present();

      this.navCtrl.push(ContentPage);
    }
  }

  //Method that dial a numbre in the cellphone 
  call(phone: string) {
    console.log("Llamando a " + phone)
    this.callNumber.callNumber(phone, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

}
