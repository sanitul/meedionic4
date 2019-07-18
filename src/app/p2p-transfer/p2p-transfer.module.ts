import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { P2pTransferPage } from './p2p-transfer.page';

const routes: Routes = [
	{
		path: '',
		component: P2pTransferPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [P2pTransferPage]
})
export class P2pTransferPageModule { }
