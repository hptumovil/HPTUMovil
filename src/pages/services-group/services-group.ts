import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortafolioServicios } from '../../providers/providers';

/**
 * Generated class for the ServicesGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services-group',
  templateUrl: 'services-group.html',
})
export class ServicesGroupPage {

  services: any;
  groupedServices = [];
  category: String;
  isValid: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: PortafolioServicios) {
    this.services = navParams.get('services');
    this.category = navParams.get('category');

    this.groupServices(this.services);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesGroupPage');
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
      return a.Subgrupo > b.Subgrupo;
    });

    //Variables to contain the letter and group under that letter
    let currentSubgroup = false;
    let currentServices = [];

    //this groups the the letter groups and the physicians under this.groupedContacts
    sortedServices.forEach((value, index) => {

      if (value.Subgrupo != currentSubgroup) {

        currentSubgroup = value.Subgrupo;

        let newGroup = {
          subgrupo: currentSubgroup,
          services: []
        };

        currentServices = newGroup.services;
        this.groupedServices.push(newGroup);

      }
      currentServices.push(value);
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

  /**
   * Navigate to the detail page for this item.
   */
  openItem(subgroup: String) {

    let Subcategory = this.groupedServices.filter(services => services.subgrupo == subgroup);

    this.navCtrl.push('ServicesDetailPage', { services: Subcategory[0].services, category: this.category, subcategory: subgroup });
  }

}
