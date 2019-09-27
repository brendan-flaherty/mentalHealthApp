import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PsychPage } from './psych';

@NgModule({
  declarations: [
    PsychPage,
  ],
  imports: [
    IonicPageModule.forChild(PsychPage),
  ],
})
export class PsychPageModule {}
