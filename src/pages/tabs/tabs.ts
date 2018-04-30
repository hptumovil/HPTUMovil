import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { App, IonicPage, NavController } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;

  tab1Title = "Inicio";
  tab2Title = "Solicitar cita";
  tab3Title = "Mis resultados";
  tab4Title = "Mas";

  constructor(public navCtrl: NavController, public translateService: TranslateService, public appCtrl: App) {    
  }
  
}
