import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
	selector: 'app-create-account',
	templateUrl: './create-account.page.html',
	styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
	constructor(
		private navCtrl: NavController
	) { }

	ngOnInit() {
	}
	gotoCreateLogin() {
		this.navCtrl.navigateForward('/details-screen/dashboard');
	}

}
