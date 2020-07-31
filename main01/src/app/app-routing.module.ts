import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './empty.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
	{
		path: 'pages',
		component:PagesComponent
	},
	{
		path: '**',
		component: EmptyComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
