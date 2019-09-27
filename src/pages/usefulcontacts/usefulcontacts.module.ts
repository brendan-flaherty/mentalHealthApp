import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsefulcontactsPage } from './usefulcontacts';

@NgModule({
  declarations: [
    UsefulcontactsPage,
  ],
  imports: [
    IonicPageModule.forChild(UsefulcontactsPage),
  ],
})
export class UsefulcontactsPageModule {}
