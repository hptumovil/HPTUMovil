import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { AppointmentsPage, MapPage, ContactPage, CheckinPage, PhysiciansPage, DonatePage, MedExamsPage, LabPage, IndoorNavigatorStartPage, ServicesPage} from '../pages';

import { Physician } from '../../models/physician';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  //We need these variables to save the physician that will be pass to NuestrosProfesionales functionality
  physicianCollection: AngularFirestoreCollection<Physician>;
  physicians: Array<any>;
  especialidades: any;

  //URL to redirect to payment page
  url: string = 'https://www.zonapagos.com/t_hptu/pagos.asp';
  //Array of pages to pass to navController
  pages:any [] =[AppointmentsPage, ServicesPage, MedExamsPage, MapPage, PhysiciansPage, ContactPage, DonatePage, IndoorNavigatorStartPage, CheckinPage];
  
  constructor(public navCtrl: NavController, private db: AngularFirestore, private inAppbrowser: InAppBrowser) {
    this.physicianCollection = this.db.collection('medicos', ref => ref.where('isActive', '==', true).orderBy('lastname'));
    this.especialidades = this.db.collection('especialidades-medicas', ref => ref.orderBy('Nombre')).valueChanges();
    this.initializeItems();
   }

  //Method that load the selected page
  goToPage(page: number) {
    if(page == 4){
      this.navCtrl.push(this.pages[page], {
        physicians: this.physicians,
        specialities: this.especialidades      
      });
    }else{
      this.navCtrl.push(this.pages[page]);
    }
    
  }

  /**
   * Load all Physicians in the array that will be pass to NuestroProfesionales
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
              indice_especialidad: item.payload.doc.data().indice_especialidad,
              especialidad: item.payload.doc.data().especialidad
        }
      })
    });
  }

  //Method that open a browser in the mobil phone
  openWebpage() {
    //Set options
    const options: InAppBrowserOptions = {
      zoom: 'yes',
      location: 'yes',
      hardwareback: 'yes',
      footer: 'yes',
      toolbar: 'yes'
    }

    // Opening a URL and returning an InAppBrowserObject
    this.inAppbrowser.create(this.url, '_system', 'zoom=yes,location=no,hardwareback=no,footer=yes,toolbar=yes');
    //this.inAppbrowser.create(this.url, '_self', options);
  }
}
