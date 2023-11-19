import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main/main.component";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import { PictureComponent } from './picture/picture.component';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";


@NgModule({
    declarations: [MainComponent, PictureComponent],
    imports: [
        CommonModule,
        RouterOutlet,
        AppRoutingModule,
        HeaderComponent,
        FooterComponent
    ]
})
export class PagesModule {
}
