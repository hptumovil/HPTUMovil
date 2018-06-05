import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Physician } from '../../models/physician';

/**
 * Generated class for the PhysiciansCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-physicians-category',
  templateUrl: 'physicians-category.html',
})
export class PhysiciansCategoryPage {
  physicians: any;
  category: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category= navParams.get('category');
    this.physicians = navParams.get('physicians');
    console.log(this.physicians);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhysiciansCategoryPage');
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(medico: Physician) {
    this.navCtrl.push('PhysicianDetailPage', {
      medico: medico
    });
  }

}
