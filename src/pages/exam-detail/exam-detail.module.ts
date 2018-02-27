import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamDetailPage } from './exam-detail';

@NgModule({
  declarations: [
    ExamDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamDetailPage),
  ],
})
export class ExamDetailPageModule {}
