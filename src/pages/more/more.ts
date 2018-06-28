import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface PageItem {
  title: string
  component: any
}
type PageList = PageItem[]

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  //Pages for the More screen
  pages: any[] = [
    { title: 'Portafolio de servicios', component: 'ServicesPage' },   
    { title: 'Cómo llegar', component: 'MapPage' },
    { title: 'Contáctenos', component: 'ContactPage' },
    { title: 'Preguntas frecuentes', component: 'FrequentlyAskedQuestionsPage' }    
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  //Method that open the selected page
  openPage(page: PageItem) {    
    this.navCtrl.push(page.component);
  }
}
