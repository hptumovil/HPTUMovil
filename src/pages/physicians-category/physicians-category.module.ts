import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhysiciansCategoryPage } from './physicians-category';

@NgModule({
  declarations: [
    PhysiciansCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(PhysiciansCategoryPage),
  ],
})
export class PhysiciansCategoryPageModule {}
