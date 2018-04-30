import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { servicioMedico } from '../../models/servicioMedico'

/**
 * Generated class for the AppointmentsGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointments-group',
  templateUrl: 'appointments-group.html',
})
export class AppointmentsGroupPage {
  services: any;
  category: String;
  isValid: boolean = true;
  itemsToShow: servicioMedico[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.services = navParams.get('services');
    this.category = navParams.get('category');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsGroupPage');
    this.initializeItems();
  }

  initializeItems() {
    this.itemsToShow = this.services;
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
      this.initializeItems();
      return;
    }
    let searchedItems = this.query({
      Nombre: val,
      Grupo: val
    });

    this.itemsToShow = searchedItems;
  }  

  /**
   * Navigate to the detail page for this item.
   */
  openForm(service: servicioMedico) {

    if (service.RequiereCita) {
      this.navCtrl.push('AppointmentsFormPage', { service: service })
    } else {
      this.navCtrl.push('AppointmentsMessagePage', { service: service });
    }
  }

  /**
   * Method that allows to search within the json
   * @param params the keys within the json to filter the search
   * see https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript for tildes problem
   */
  query(params?: any) {
    if (!params) {
      return this.itemsToShow;
    }
    
    return this.services.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(params[key].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  /**
   * Show all the items when the searchbar is cleaned
   */  
  onClear(ev){
    this.isValid = true;
    this.initializeItems();       
  }

  /**
   * Show all the items when the searchbar is canceled
   */
  onCancel(ev){
    this.isValid = true;
    this.initializeItems();    
  } 
  
  onBackSpace(ev){
    this.initializeItems();  
    this.getItems(ev);
  }


}
