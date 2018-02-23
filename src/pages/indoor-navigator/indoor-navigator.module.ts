import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndoorNavigatorPage } from './indoor-navigator';

@NgModule({
  declarations: [
    IndoorNavigatorPage,
  ],
  imports: [
    IonicPageModule.forChild(IndoorNavigatorPage),
  ],
})
export class IndoorNavigatorPageModule {}
