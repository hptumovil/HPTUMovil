import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab2Root, Tab4Root, MapPage, ContactPage, CheckinPage, PhysiciansPage, DonatePage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  //Array of pages to pass to navController
  pages:any [] =[Tab2Root, Tab4Root, MapPage, ContactPage, CheckinPage, PhysiciansPage, DonatePage];
  constructor(public navCtrl: NavController) { }

  goToPage(page: number) {
    this.navCtrl.push(this.pages[page]);
  }
}
