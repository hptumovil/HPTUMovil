import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentsFormPage } from './appointments-form';

@NgModule({
  declarations: [
    AppointmentsFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentsFormPage),
  ],
})
export class AppointmentsFormPageModule {}
