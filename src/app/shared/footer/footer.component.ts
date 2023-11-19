import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @ViewChild('footer') public footer!: ElementRef;

  public getFooterHeight(): number {
    return this.footer?.nativeElement.offsetHeight;
  }
}
