import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { servicioMedico } from '../../models/servicioMedico';

/**
 * Generated class for the ServiceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-detail',
  templateUrl: 'service-detail.html',
})
export class ServiceDetailPage {
  service: servicioMedico;
  showVisitingHours = true;
  showAtentionHours = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.service = navParams.get('service');
    this.hasVisitingHours();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceDetailPage');
  }

  hasVisitingHours(){
    if(this.service.Horario_visitas == null){
      this.showVisitingHours = false;
    }
    if(this.service.Horario_atencion == null){
      this.showAtentionHours = false;
    }
  }

}
