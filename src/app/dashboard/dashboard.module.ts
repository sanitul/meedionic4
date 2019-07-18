import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { DashboardService } from './serviec/dashboard.service';
import { DashboardDirective } from './directive/dashboard.directive';
import { DashboardPipe } from './pipes/dashboard.pipe';

import { AccountSummaryComponent } from './components/account-summary/account-summary.component';

const routes: Routes = [
	{
		path: 'tabs',
		component: DashboardPage,
		children: [
			{
				path: 'summary',
				loadChildren: '../dashboard-summary/dashboard-summary.module#DashboardSummaryPageModule'
			},
			{
				path: 'inviteuser',
				loadChildren: '../invite-user/invite-user.module#InviteUserPageModule'
			},
			{
				path: 'summary/transactionlist',
				loadChildren: '../transaction-list/transaction-list.module#TransactionListPageModule'
			},
			{
				path: 'internaltransfer',
				loadChildren: '../internal-transfer/internal-transfer.module#InternalTransferPageModule'
			},
			{
				path: 'p2ptransfer',
				loadChildren: '../p2p-transfer/p2p-transfer.module#P2pTransferPageModule'
			},
			{
				path: 'meedshare',
				loadChildren: '../meedshare/meedshare.module#MeedsharePageModule'
			}
		]
	},
	{
		path: '',
		redirectTo: 'tabs/summary',
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
	providers: [
		DashboardService
	],
	declarations: [DashboardPage, DashboardDirective, DashboardPipe, AccountSummaryComponent]
})
export class DashboardPageModule { }
