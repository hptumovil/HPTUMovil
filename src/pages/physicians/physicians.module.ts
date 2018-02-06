import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhysiciansPage } from './physicians';

@NgModule({
  declarations: [
    PhysiciansPage,
  ],
  imports: [
    IonicPageModule.forChild(PhysiciansPage),
  ],
})
export class PhysiciansPageModule {}
