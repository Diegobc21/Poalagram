import {Component, inject} from '@angular/core';
import {NavigationService} from "../../core/services/navigation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  private navigationService: NavigationService = inject(NavigationService)
  private router: Router = inject(Router)

  constructor(private route: ActivatedRoute) {
  }

  public goToNextPage(): void {
    // this.router.navigate(['mmmsshi/fotios'], {relativeTo: this.route});
    this.navigationService.navigateByUrl('mmmsshi/fotios').then();
  }
}
