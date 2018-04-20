import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentsGroupPage } from './appointments-group';

@NgModule({
  declarations: [
    AppointmentsGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentsGroupPage),
  ],
})
export class AppointmentsGroupPageModule {}
