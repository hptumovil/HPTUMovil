import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { servicioMedico } from '../../models/servicioMedico';

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
  services = [];
  groupedServices = [];
  category: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.services = navParams.get('services');
    this.category = navParams.get('category');
    this.groupServices(this.services);      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesGroupPage');    
  }  

  //Method that sorts all the services in groups
  groupServices(services) {
    
    //Variables to contain the letter and group under that letter
    let currentSubgroup: string = "";
    let currentServices = [];

    //this groups the the letter groups and the physicians under this.groupedContacts
    //sortedServices.forEach((value)

    //sortedServices
    services.forEach(element => {
      if (element.Subgrupo != currentSubgroup) {

        currentSubgroup = element.Subgrupo;

        let newGroup = {
          subgrupo: currentSubgroup,
          services: []
        };

        currentServices = newGroup.services;
        this.groupedServices.push(newGroup);
      }
      currentServices.push(element);
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


