import {
  Component,
  HostListener,
  ViewChild
} from '@angular/core';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
})
export class PictureComponent {

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.containerStyle();
  }

  @ViewChild('header', { static: false }) header!: HeaderComponent;
  @ViewChild('footer', { static: false }) footer!: FooterComponent;

  constructor() {}

  containerStyle(): {} {
    const style = {
      height: `${
        window.innerHeight -
        this.header?.getHeaderHeight() -
        this.footer?.getFooterHeight()
      }px`,
    }
    console.log(style);
    return style;
  }
}
