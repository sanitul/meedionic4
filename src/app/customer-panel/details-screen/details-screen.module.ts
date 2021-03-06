import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsScreenPage } from './details-screen.page';

const routes: Routes = [
	{
		path: 'panel',
		component: DetailsScreenPage,
		children: [
			{
				path: 'dashboard',
				loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
			}
		]
	},
	{
		path: '',
		redirectTo: 'panel/dashboard',
		pathMatch: 'full'
	}
];
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [DetailsScreenPage]
})
export class DetailsScreenPageModule { }
