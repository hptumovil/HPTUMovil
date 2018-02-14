import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer';

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
  slideOneForm: FormGroup;
  submitAttempt: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private emailComposer: EmailComposer) {
    this.slideOneForm = formBuilder.group({
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
      to: 'juandavid.torres@gmail.com',
      subject: 'Mail from Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };
    
    // Send a text message using default options
    this.emailComposer.open(email);
    


  }

  verify() {
    this.submitAttempt = true;

    if (!this.slideOneForm.valid) {
      console.log("fail!")
    }
    else {
      console.log("success!")
      console.log(this.slideOneForm.value);
    }
  }

}
