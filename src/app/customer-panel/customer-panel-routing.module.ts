import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsScreenPage } from './details-screen/details-screen.page';
const routes: Routes = [
	{
		path: '',
		loadChildren: './details-screen/details-screen.module#DetailsScreenPageModule'
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CustomerPanelRoutingModule { }
