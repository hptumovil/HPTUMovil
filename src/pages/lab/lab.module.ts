import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabPage } from './lab';

@NgModule({
  declarations: [
    LabPage,
  ],
  imports: [
    IonicPageModule.forChild(LabPage),
  ],
})
export class LabPageModule {}
