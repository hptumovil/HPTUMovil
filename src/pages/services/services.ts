import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  slides = [
    {
      title: "Cirugía",      
      image: "assets/img/services/cirugia.jpg",
    },
    {
      title: "Consulta Externa",      
      image: "assets/img/services/consulta.jpg",
    },
    {
      title: "Urgencias",      
      image: "assets/img/services/urgencias.jpg",
    }
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

}
