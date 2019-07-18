import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
	selector: 'app-create-login',
	templateUrl: './create-login.page.html',
	styleUrls: ['./create-login.page.scss'],
})
export class CreateLoginPage implements OnInit {

	constructor(
		private navCtrl: NavController
	) { }

	ngOnInit() {
	}
	gotoLoginScreen() {
		this.navCtrl.navigateForward('/login');
	}
	gotoCreateAccount() {
		this.navCtrl.navigateForward('/singup/createaccount');
	}

}
