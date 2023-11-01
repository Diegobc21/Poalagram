import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {CardComponent} from "./component/card/card.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: '',
    children: [
      {
        path: 'fotios',
        component: CardComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
