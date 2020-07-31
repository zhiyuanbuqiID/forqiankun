import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LayoutComponent } from './layout/layout/layout.component';
import { EmptyComponent } from './empty.component';
import { PagesComponent } from './pages/pages.component';
 
const routes: Routes = [ 
  // {
  //   path: 'ng7lazy',loadChildren:"./layout/layout.module#LayoutModule"
  // },
  {
    path: 'ng7normal',component: PagesComponent
  },
  {
    path: '',
    redirectTo: 'ng7normal',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: EmptyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
