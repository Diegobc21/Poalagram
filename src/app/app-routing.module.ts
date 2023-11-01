import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {CardComponent} from "./component/card/card.component";
import {PictureComponent} from "./pages/picture/picture.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'mmmsshi',
    component: CardComponent,
    children: [
      {
        path: 'fotios',
        component: PictureComponent
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
