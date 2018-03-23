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
  groupedServices = [];
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

  //Method that sorts all the Physicians in groups by lastname
  groupServices(services) {

    // sort physicians by alphabetical order
    let sortedServices = services.sort(function (a, b) {
      return a.Nombre > b.Nombre;
    });

    //Variables to contain the letter and group under that letter
    let currentSubgroup = false;
    let currentServices = [];

    //this groups the the letter groups and the physicians under this.groupedContacts
    sortedServices.forEach((value, index) => {

      if (value.Subgrupo.charAt(0) != currentSubgroup) {

        currentSubgroup = value.lastname.charAt(0);

        let newGroup = {
          letter: currentSubgroup,
          contacts: []
        };

        currentServices = newGroup.contacts;
        this.groupedServices.push(newGroup);

      }
      currentServices.push(value);
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
