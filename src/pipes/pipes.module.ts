import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlPipe } from "../pipes/tohtml/tohtml";


@NgModule({
  declarations: [HtmlPipe],
  imports: [
    CommonModule,
  ],
    exports:[HtmlPipe]
})
export class PipesModule { }