import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router
  ) {
  }

  public navigateToHome(): Promise<any> {
    return this.navigateByUrl('/');
  }


  public navigateByUrl(path: string): Promise<any> {
    return this.router.navigateByUrl(path);
  }
}
