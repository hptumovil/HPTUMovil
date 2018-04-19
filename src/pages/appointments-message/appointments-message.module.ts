import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentsMessagePage } from './appointments-message';

@NgModule({
  declarations: [
    AppointmentsMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentsMessagePage),
  ],
})
export class AppointmentsMessagePageModule {}
