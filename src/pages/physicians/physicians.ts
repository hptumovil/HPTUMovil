import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { medico } from '../../models/medico';
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
  groupedContacts = [];
  //medico: medico;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhysiciansPage');
    this.getContacts();    
  }

  /**
   * Load all items in the array
   */
  initializeItems() {
    this.groupedContacts = [];
    this.groupContacts(this.users);
  }

  //Method that gets all the Physicians from de database
  getContacts() {
    this.restProvider.getUsers()
      .then(data => {
        this.users = data;
        this.initializeItems();
      });
  }

  //Method that sorts all the Physicians in groups by lastname
  groupContacts(contacts) {

    let sortedContacts = contacts.sort(function(a, b) {      
      return a.lastname > b.lastname; 
    });    
    
    let currentLetter = false;
    let currentContacts = [];

    //this.users = sortedContacts;

    sortedContacts.forEach((value, index) => {

      if (value.lastname.charAt(0) != currentLetter) {

        currentLetter = value.lastname.charAt(0);

        let newGroup = {
          letter: currentLetter,
          contacts: []
        };

        currentContacts = newGroup.contacts;
        this.groupedContacts.push(newGroup);

      }
      currentContacts.push(value);
    });
    
  }
  
  
  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;      
    console.log(val);

    // if the value is an empty string don't filter the items
    if (!val || !val.trim()) {      
      this.initializeItems();
      return;
    }
    let Contacts = this.users.filter(item  => item.firstname.toLowerCase().includes(val.toLowerCase()) || item.lastname.toLowerCase().includes(val.toLowerCase()));   
    this.groupedContacts = [];
    this.groupContacts(Contacts);    
      
    console.log(this.groupedContacts);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(medico: medico) {
    this.navCtrl.push('ItemDetailPage', {
      medico: medico
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
