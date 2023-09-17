import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main/main.component";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    AppRoutingModule,
  ],
  exports: [MainComponent]
})
export class PagesModule {
}
