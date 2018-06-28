import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    this.medicalServiceCollection = db.collection('medical-services', ref => ref.orderBy('Nombre'));    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsPage');
    this.initializeItems();
  }

   /**
   * Load all items in the array
   */
  async initializeItems() {    
    this.medicalServiceCollection.snapshotChanges().subscribe(servicesList =>{
      this.itemsToShow = servicesList.map(item => {
        return{
          id: item.payload.doc.id,
          Categoria: item.payload.doc.data().Categoria,
          Email: item.payload.doc.data().Email,
          Mensaje: item.payload.doc.data().Mensaje,
          Nombre: item.payload.doc.data().Nombre,
          RequiereCita: item.payload.doc.data().RequiereCita,
          activeOther: item.payload.doc.data().activeOther,
          estaActivo: item.payload.doc.data().estaActivo,
          palabrasClaves: item.payload.doc.data().palabrasClaves          
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
   * see https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript for accents problem
   */
  query(params?: any) {
    if (!params) {
      return this.itemsToShow;
    }
    
    return this.itemsToShow.filter((item) => {
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
