import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrsdetilPage } from './brsdetil';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    BrsdetilPage
  ],
  imports: [
    IonicPageModule.forChild(BrsdetilPage),
    PipesModule
  ]
})
export class BrsdetilPageModule {}



