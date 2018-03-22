import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesGroupPage } from './services-group';

@NgModule({
  declarations: [
    ServicesGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicesGroupPage),
  ],
})
export class ServicesGroupPageModule {}
