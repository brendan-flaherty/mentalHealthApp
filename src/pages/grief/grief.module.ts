import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GriefPage } from './grief';

@NgModule({
  declarations: [
    GriefPage,
  ],
  imports: [
    IonicPageModule.forChild(GriefPage),
  ],
})
export class GriefPageModule {}
