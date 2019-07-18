import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InternalTransferPage } from './internal-transfer.page';

const routes: Routes = [
	{
		path: '',
		component: InternalTransferPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [InternalTransferPage]
})
export class InternalTransferPageModule { }
