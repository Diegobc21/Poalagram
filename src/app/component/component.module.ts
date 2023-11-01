import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./card/card.component";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class ComponentModule {
}
