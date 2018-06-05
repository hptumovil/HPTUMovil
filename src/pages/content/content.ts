import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { AppointmentsPage, MapPage, ContactPage, CheckinPage, PhysiciansPage, DonatePage, MedExamsPage, LabPage, IndoorNavigatorPage, ServicesPage } from '../pages';


@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  //Array of pages to pass to navController
  pages:any [] =[AppointmentsPage, ServicesPage, MedExamsPage, MapPage, PhysiciansPage, ContactPage, CheckinPage, IndoorNavigatorPage, DonatePage];
  
  constructor(public navCtrl: NavController, private db: AngularFirestore) { }
  
  //Method that load the selected page
  goToPage(page: number) {
    this.navCtrl.push(this.pages[page]);   
  }
}
