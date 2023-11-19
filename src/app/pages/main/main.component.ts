import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  private router: Router = inject(Router);

  constructor() {}

  public goToNextPage(): void {
    this.router.navigate(['/miau/fotios']);
  }
}
