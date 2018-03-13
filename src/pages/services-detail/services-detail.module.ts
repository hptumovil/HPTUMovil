import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesDetailPage } from './services-detail';

@NgModule({
  declarations: [
    ServicesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicesDetailPage),
  ],
})
export class ServicesDetailPageModule {}
