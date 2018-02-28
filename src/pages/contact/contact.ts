import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer';
import { RestProvider } from '../../providers/rest/rest';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private emailComposer: EmailComposer, private restProvider: RestProvider) {
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

  save() {
    this.verify();
    

    this.restProvider.sendMessage(this.contactUsForm.value);   
  }

  verify() {
    this.submitAttempt = true;

    if (!this.contactUsForm.valid) {
      console.log("fail!")
    }
    else {
      console.log("success!")
      console.log(this.contactUsForm.value);
    }
  }  

}
