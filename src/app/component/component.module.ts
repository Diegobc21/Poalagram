import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./card/card.component";
import {RouterOutlet} from "@angular/router";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";


@NgModule({
    declarations: [CardComponent],
    imports: [
        CommonModule,
        RouterOutlet,
        FooterComponent,
        HeaderComponent
    ]
})
export class ComponentModule {
}
