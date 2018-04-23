import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentPage } from '../pages';
import { CallNumber } from '@ionic-native/call-number';
import { AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

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
  contactenosCollection : AngularFirestoreCollection<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder, 
    private callNumber: CallNumber, 
    public alertCtrl: AlertController,
    private db: AngularFirestore
  ) {
    this.contactUsForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: [''],
      message: ['', Validators.compose([Validators.required])]
    });
    //This create a nre collection from database in firebase
    this.contactenosCollection = db.collection('contactenos');
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
        title: 'Debes Ingresar todos los datos',
        subTitle: 'Debes llenar todos los datos solicitados.',
        buttons: ['OK']
      });
      alert.present();
      console.log("fail! Info ")
    }
    else {
      console.log("All data was entered correctly!")
      console.log(this.contactUsForm.value);

      try {        
        //Let's create a new document and add to the colection
        this.contactenosCollection.add(
          {
            name: this.contactUsForm.value.name,
            email: this.contactUsForm.value.email,
            phone: this.contactUsForm.value.phone,
            message: this.contactUsForm.value.message
          }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

        //Let's show an alert that everything goes fine
        let alert = this.alertCtrl.create({
          title: 'Mensaje Enviado!',
          subTitle: 'Tu mensaje ha sido enviado exitosamente.',
          buttons: ['OK']
        });
        alert.present();
      } catch (error) {
        console.error(error);
        //Let's show an alert that something went wrong
      let alert = this.alertCtrl.create({
        title: 'No se pudo Enviar el mensaje',
        subTitle: 'Lo sentimos, hubo un error mientras se enviaba el mensaje, por favor intente mas tarde',
        buttons: ['OK']
      });
      alert.present();
      }

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
