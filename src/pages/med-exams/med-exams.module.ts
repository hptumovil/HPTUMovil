import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedExamsPage } from './med-exams';

@NgModule({
  declarations: [
    MedExamsPage,
  ],
  imports: [
    IonicPageModule.forChild(MedExamsPage),
  ],
})
export class MedExamsPageModule {}
