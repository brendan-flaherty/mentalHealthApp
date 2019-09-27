import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuicidePage } from './suicide';

@NgModule({
  declarations: [
    SuicidePage,
  ],
  imports: [
    IonicPageModule.forChild(SuicidePage),
  ],
})
export class SuicidePageModule {}
