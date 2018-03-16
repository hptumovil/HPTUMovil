import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortafolioServicios } from '../../providers/providers';

/**
 * Generated class for the ServicesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services-detail',
  templateUrl: 'services-detail.html',
})
export class ServicesDetailPage {
  services: any;
  category: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: PortafolioServicios) {
    this.services = navParams.get('services');
    this.category = navParams.get('category');
    
    //Sort the services by name
    this.services.sort(function (a, b) {
      return a.Nombre > b.Nombre;
    });      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesDetailPage');
  }

  /**
   * Load all items in the array
   */
  initializeItems() {
    this.services = this.items.query({      
      Grupo: this.category
    });

    //Sort the services by name
    this.services.sort(function (a, b) {
      return a.Nombre > b.Nombre;
    });
  }

  /**
   * Perform a search for the proper items.
   */
  getItems(ev) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (!val || !val.trim()) {
      this.initializeItems();     
      return;
    }
    this.services = this.items.query({
      Nombre: val,
      Grupo: val
    });
  }

  /**
   * Show all the items when the searchbar is cleaned
   */
  onClear(ev){
    this.initializeItems();
       
  }

  onCancel(ev){
    this.initializeItems();
     
  }

}
