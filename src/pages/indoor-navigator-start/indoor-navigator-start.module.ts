import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndoorNavigatorStartPage } from './indoor-navigator-start';

@NgModule({
  declarations: [
    IndoorNavigatorStartPage,
  ],
  imports: [
    IonicPageModule.forChild(IndoorNavigatorStartPage),
  ],
})
export class IndoorNavigatorStartPageModule {}
