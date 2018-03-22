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
   * Perform a search for the proper items.
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
      Nombre: val,
      Grupo: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(category: String) {
    let categoryServices = this.items.query({      
      Grupo: category
    });

    this.navCtrl.push('ServicesGroupPage',{services: categoryServices, category: category});
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
