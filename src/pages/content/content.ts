import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Physician } from '../../models/physician';

import { AppointmentsPage, MapPage, ContactPage, CheckinPage, PhysiciansPage, DonatePage, MedExamsPage, LabPage, IndoorNavigatorPage, ServicesPage } from '../pages';


@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  physicianCollection: AngularFirestoreCollection<Physician>;
  physicians: Array<any>;
  especialidadesMedicas: any; 
  //Array of pages to pass to navController
  pages:any [] =[AppointmentsPage, ServicesPage, MedExamsPage, MapPage, PhysiciansPage, ContactPage, CheckinPage, IndoorNavigatorPage, DonatePage];
  
  /**The info for Nuestros profesionales, it's downloaded before the user enters th functionality and pass like a paremeter */
  constructor(public navCtrl: NavController, private db: AngularFirestore) {
    this.physicianCollection = this.db.collection('medicos', ref => ref.where('isActive', '==', true).orderBy('lastname'));
    this.especialidadesMedicas = this.db.collection('especialidades-medicas', ref => ref.orderBy('Nombre')).valueChanges();
    this.initializeItems(); 
   }
  
  //Method that load the selected page
  goToPage(page: number) {
    if(page == 4){
      this.navCtrl.push(this.pages[page],{
        physicians: this.physicians,
        specialities: this.especialidadesMedicas
      });
    }else{
      this.navCtrl.push(this.pages[page]); 
    }
      
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
              indice_especialidad: item.payload.doc.data().indice_especialidad,
              especialidad: item.payload.doc.data().especialidad
        }
      })
    });
  }
}
