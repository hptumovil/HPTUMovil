import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { servicioMedico } from '../../models/servicioMedico';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
  portfolioCollection: AngularFirestoreCollection<any>;
  isValid: boolean = true;  

  currentItems: servicioMedico[];

  slides = [
    {
      title: "Cirugía",      
      image: "assets/img/services/InstitucionalA.jpg",
    },
    {
      title: "Consulta Externa",      
      image: "assets/img/services/InstitucionalB.jpg",
    },
    {
      title: "Urgencias",      
      image: "assets/img/services/InstitucionalC.jpg",
    }
];

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    this.portfolioCollection = this.db.collection<servicioMedico[]>('PortafolioServicios', ref => ref.where('isActive', '==', true).orderBy('Subgrupo'));
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
    
  }

  /**
   * Load all items in the array
   */
  initializeItems() {
        
    this.portfolioCollection.snapshotChanges().subscribe(servicesList =>{
      this.currentItems = servicesList.map(item => {
        return{
          id: item.payload.doc.id,
          Grupo: item.payload.doc.data().Grupo,
          Subgrupo: item.payload.doc.data().Subgrupo,
          Nombre: item.payload.doc.data().Nombre,
          Descripcion: item.payload.doc.data().Descripcion,
          Horario_atencion: item.payload.doc.data().Horario_atencion,
          Horario_visitas: item.payload.doc.data().Horario_visitas,
          Ubicacion: item.payload.doc.data().Ubicacion
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

    this.currentItems = searchedItems;
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(category: String) {
    let categoryServices = this.query({      
      Grupo: category
    });

    this.navCtrl.push('ServicesGroupPage',{services: categoryServices, category: category});
  }

  /**
   * Navigate to the detail page for this item.
   */
  openDirectly(subgroup: String) {
    let categoryServices = this.query({      
      Grupo: subgroup
    });

    let Subcategory = categoryServices.filter(services => services.subgrupo == subgroup);

    this.navCtrl.push('ServicesDetailPage', { services: categoryServices, category: subgroup, subcategory: subgroup });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openEmergency(subgroup: String) {
    let categoryServices = this.query({      
      Grupo: subgroup
    });

    this.navCtrl.push('ServiceDetailPage', { service: categoryServices[0] });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openSearchedItem(service: servicioMedico) {
    this.navCtrl.push('ServiceDetailPage', {
      service: service
    });   
  }

  /**
   * Method that allows to search within the json
   * @param params the keys within the json to filter the search
   */
  query(params?: any) {
    if (!params) {
      return this.currentItems;
    }
    
    return this.currentItems.filter((item) => {
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
  
  /**
   * Show all the items when the BackSpace is pressed in the searchbar
   */
  onBackSpace(ev){
    this.initializeItems();  
    this.getItems(ev);
  }

}
