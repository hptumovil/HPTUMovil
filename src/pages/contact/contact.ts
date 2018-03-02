import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { ContentPage } from '../pages';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private restProvider: RestProvider) {
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

  /**
   * save() {
    if(this.verify()){
      this.restProvider.sendMessage(this.contactUsForm.value);
      this.navCtrl.push(ContentPage);
    }
    else{
      console.log("No se verifico de forma correcta")
    }    
  }
  **/

  save() {
    if (!this.contactUsForm.valid) {
      this.submitAttempt = true;
      console.log("fail!")
    }
    else {
      console.log("success!")
      console.log(this.contactUsForm.value);

      try {
        this.restProvider.sendMessage(this.contactUsForm.value);
      } catch (error) {
        console.error(error)
      }
      this.navCtrl.push(ContentPage);
    }
  }

}
