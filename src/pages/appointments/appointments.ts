import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentsFormPage } from '../appointments-form/appointments-form';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { servicioMedico } from '../../models/servicioMedico';

/**
 * Generated class for the AppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage {
  medicalServiceCollection: AngularFirestoreCollection<any>;
  isValid: boolean = true; 

  itemsToShow: servicioMedico[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    this.medicalServiceCollection = this.db.collection('medical-services');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsPage');
    this.initializeItems();
  }

   /**
   * Load all items in the array
   */
  async initializeItems() {
    //this.currentItems = this.items.query();
    this.medicalServiceCollection.snapshotChanges().subscribe(servicesList =>{
      this.itemsToShow = servicesList.map(item => {
        return{
          id: item.payload.doc.id,
          Categoria: item.payload.doc.data().Categoria,
          Email: item.payload.doc.data().Email,
          Mensaje: item.payload.doc.data().Mensaje,
          Nombre: item.payload.doc.data().Nombre,
          RequiereCita: item.payload.doc.data().RequiereCita,
          estaActivo: item.payload.doc.data().estaActivo,
          tipo: item.payload.doc.data().tipo
        }
      })
    });    
  }

  /**
   * Perform a search for the proper items.
   */
  getItems(ev) {
    this.isValid = false;    

    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log(val);

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
  openItem(category: String) {
    let categoryServices = this.query({      
      Categoria: category
    });

    this.navCtrl.push('AppointmentsGroupPage',{services: categoryServices, category: category});
  }

  /**
   * Navigate to the detail page for this item.
   */
  openSearchedItem(service: servicioMedico) {
    //this.isValid = true;
    if (service.RequiereCita)
    this.navCtrl.push('AppointmentsFormPage', {
      service: service
    });
    else
    this.navCtrl.push('AppointmentsMessagePage', {
      service: service
    });    
  }

  /**
   * Method that allows to search within the json
   * @param params the keys within the json to filter the search
   */
  query(params?: any) {
    if (!params) {
      return this.itemsToShow;
    }
    
    return this.itemsToShow.filter((item) => {
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

}
