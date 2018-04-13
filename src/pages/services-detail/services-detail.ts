import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortafolioServicios } from '../../providers/providers';
import { servicioMedico } from '../../models/servicioMedico';

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
  servicesList = [];
  category: String;
  subcategory: String;
  description: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: PortafolioServicios) {
    this.services = navParams.get('services');    
    this.category = navParams.get('category');   
    this.subcategory = navParams.get('subcategory');    
    let descriptionObject = this.items.queryDescription({
      Nombre: this.subcategory
    });
    this.description = descriptionObject[0].Descripcion;
    
    this.initializeItems();     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesDetailPage');
  }

  /**
   * Load all items in the array
   */
  initializeItems() {
    this.servicesList = this.services;

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
    this.servicesList = this.query({
      Nombre: val,
      Grupo: val
    });
  }

  /**
   * Method that allows to search within the json
   * @param params the keys within the json to filter the search
   */
  query(params?: any) {
    if (!params) {
      return this.servicesList;
    }
    
    return this.servicesList.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  
  /**
   * Navigate to the detail page for this item.
   */
  openItem(service: servicioMedico) {
    this.navCtrl.push('ServiceDetailPage', {
      service: service
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
