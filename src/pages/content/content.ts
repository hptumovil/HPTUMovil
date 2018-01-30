import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab2Root, Tab4Root, MapPage, ContactPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  pages:any [] =[Tab2Root, Tab4Root, MapPage, ContactPage];
  constructor(public navCtrl: NavController) { }

  goToPage(page: number) {
    this.navCtrl.push(this.pages[page]);
  }
}
