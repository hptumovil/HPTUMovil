import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Location } from '../../models/location';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the IndoorNavigatorEndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-indoor-navigator-end',
  templateUrl: 'indoor-navigator-end.html',
})
export class IndoorNavigatorEndPage {
  location1: Location;
  locations: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.location1 = navParams.get('location1');
    this.locations = navParams.get('locations');    
    //console.info(this.location1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndoorNavigatorEndPage');
  }

  /**
   * Navigate to the end page for the start location.
   */
  openItem(location: Location) {
    //verify if the origin and destination are similar
    if(location.titulo != this.location1.titulo){
      this.navCtrl.push('IndoorNavigatorPage', {
        location1: this.location1,
        location2: location
      });
    }else{
      this.presentAlert()
    }    
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Destino equivocado',
      subTitle: 'La ubicación de origen y destino son la misma, elige un destino diferente.',
      buttons: ['Aceptar']
    });
    alert.present();
  }

}
