import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnxietyPage } from './anxiety';

@NgModule({
  declarations: [
    AnxietyPage,
  ],
  imports: [
    IonicPageModule.forChild(AnxietyPage),
  ],
})
export class AnxietyPageModule {}
