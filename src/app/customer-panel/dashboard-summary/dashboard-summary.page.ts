import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard-summary',
	templateUrl: './dashboard-summary.page.html',
	styleUrls: ['./dashboard-summary.page.scss'],
})
export class DashboardSummaryPage implements OnInit {

	welcomeMessage = 'Good morning';
	customerName = 'David';
	money = '$2545.00';

	meedBankLogo = 'https://s3.amazonaws.com/prod-meed-www/bank_logos/meed_white_logo.png';

	constructor() { }

	ngOnInit() {
	}

}
