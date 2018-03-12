import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhysicianDetailPage } from './physician-detail';

@NgModule({
  declarations: [
    PhysicianDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PhysicianDetailPage),
  ],
})
export class PhysicianDetailPageModule {}
