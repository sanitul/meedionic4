import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
	selector: 'app-details-screen',
	templateUrl: './details-screen.page.html',
	styleUrls: ['./details-screen.page.scss'],
})
export class DetailsScreenPage implements OnInit {

	selectedPath = '';

	pages = [
		{
			title: 'HOME',
			url: '/panel/dashboard'
		},
		{
			title: 'INVITE MEMBERS',
			url: '/panel/dashboard/tabs/inviteuser'
		},
		{
			title: 'INTERNAL TRANSFER',
			url: '/panel/dashboard/tabs/internaltransfer'
		},
		{
			title: 'P2P TRANSFER',
			url: '/panel/dashboard/tabs/p2ptransfer'
		},
		{
			title: 'MEEDSHARE',
			url: '/panel/dashboard/tabs/meedshare'
		}
	];
	constructor(private router: Router) {
		this.router.events.subscribe((event: RouterEvent) => {
			if (event && event.url) {
				this.selectedPath = event.url;
			}
		});
	}

	ngOnInit() {
	}

}
