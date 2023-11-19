import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { MainComponent } from './pages/main/main.component';
import { PictureComponent } from './pages/picture/picture.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'miau',
    component: PictureComponent,
    children: [
      {
        path: 'fotios',
        component: CardComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
