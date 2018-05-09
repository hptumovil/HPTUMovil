import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
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

  portfolioCollection: AngularFirestoreCollection<any>;
  services: any;
  groupedServices = [];
  category: String;
  isValid: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private asf: AngularFirestore, public items: PortafolioServicios) {
    this.services = navParams.get('services');
    this.category = navParams.get('category');
    this.groupServices(this.services);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesGroupPage');
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
   * Navigate to the detail page for this item.
   */
  openItem(subgroup: String) {

    let Subcategory = this.groupedServices.filter(services => services.subgrupo == subgroup);

    this.navCtrl.push('ServicesDetailPage', { services: Subcategory[0].services, category: this.category, subcategory: subgroup });
  }

}
