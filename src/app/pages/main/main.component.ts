import {Component, inject} from '@angular/core';
import {NavigationService} from "../../core/services/navigation.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  private navigationService: NavigationService = inject(NavigationService)

  public goToNextPage(): void {
    this.navigationService.navigateByUrl('fotios').then();
  }
}
