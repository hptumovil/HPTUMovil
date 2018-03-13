import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PortafolioServicios } from '../../providers/providers';
import { servicioMedico } from '../../models/servicioMedico';

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

  isValid: boolean = true;
  hide: boolean = true;

  currentItems: servicioMedico[];

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: PortafolioServicios) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

  /**
   * Load all items in the array
   */
  initializeItems() {
    this.currentItems = this.items.query();
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    this.isValid = false; 

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (!val || !val.trim()) {      
      this.isValid = true;
      return;
    }
    this.currentItems = this.items.query({
      nombre: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: servicioMedico) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  /**
   * Show all the items when the searchbar is cleaned
   */
  onClear(ev){
    this.isValid = true;
       
  }

  onCancel(ev){
    this.isValid = true;
     
  }
}
