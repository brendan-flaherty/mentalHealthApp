import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EatingPage } from './eating';

@NgModule({
  declarations: [
    EatingPage,
  ],
  imports: [
    IonicPageModule.forChild(EatingPage),
  ],
})
export class EatingPageModule {}
