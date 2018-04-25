import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Physician } from '../../models/physician';
/**
 * Generated class for the PhysiciansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-physicians',
  templateUrl: 'physicians.html',
})
export class PhysiciansPage {
  users: any;
  physicianCollection: AngularFirestoreCollection<Physician>;
  physicians: Array<any>;
  groupedContacts = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    this.physicianCollection = this.db.collection('medicos');
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhysiciansPage');    
  }

  /**
   * Load all items in the array
   */
  initializeItems() {    
    this.physicianCollection.snapshotChanges().subscribe(physiciansList =>{
      this.physicians = physiciansList.map(item => {
        return{
              MedicoID: item.payload.doc.id,
              firstname: item.payload.doc.data().firstname,
              lastname: item.payload.doc.data().lastname,
              departamento: item.payload.doc.data().departamento,
              cargo: item.payload.doc.data().cargo,
              email: item.payload.doc.data().email,
              perfil: item.payload.doc.data().perfil,
              thumbnail: item.payload.doc.data().thumbnail,
              profilePic: item.payload.doc.data().profilepic,
              idiomas: item.payload.doc.data().idiomas,
              especialidad: item.payload.doc.data().especialidad
        }
      })
    });
  }  

  /**
   * Perform a service for the proper items.
   * see https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript for tildes problem
   */
  getItems(ev) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    val = val.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");   

    // if the value is an empty string don't filter the items
    if (!val || !val.trim()) {
      this.initializeItems();
      return;
    }
    let Contacts = this.physicians.filter(item => item.firstname.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(val) || item.lastname.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(val) || item.cargo.toLowerCase().includes(val));
    this.physicians = Contacts;
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(medico: Physician) {
    this.navCtrl.push('PhysicianDetailPage', {
      medico: medico
    });
  }

  /**
   * Show all the items when the searchbar is cleaned
   */
  onClear(ev) {
    this.initializeItems();
  }

  onCancel(ev) {
    this.initializeItems();
  }

  onBackSpace(ev){
    this.initializeItems();  
    this.getItems(ev);
  }

}
