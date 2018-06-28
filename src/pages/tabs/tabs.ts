import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { App, IonicPage, NavController } from 'ionic-angular';

//Imports of the pages that aim every tab
import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;  
  tab3Root: any = Tab3Root;

  //The titles of every tab
  tab1Title = "Inicio";
  tab2Title = "Solicitar cita";  
  tab3Title = "Mas";

  constructor(public navCtrl: NavController, public translateService: TranslateService, public appCtrl: App) {    
  }
  
}
