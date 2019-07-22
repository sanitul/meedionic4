import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage/ngx';
@Component({
	selector: 'app-login-screen',
	templateUrl: './login-screen.page.html',
	styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {
	loginForm: FormGroup;
	secureStorageHolder: SecureStorageObject;
	constructor(
		private navCtrl: NavController,
		private formBuilder: FormBuilder,
		public loadingController: LoadingController,
		private fingerprintAIO: FingerprintAIO,
		private secureStorage: SecureStorage
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: new FormControl(''),
			password: new FormControl('')
		});
	}
	doLogin(credentials: any) {
		if (credentials.username && credentials.password) {
			this.loginForm.reset();
			this.presentLoading();
		}
	}
	gotoCreateLogin() {
		this.navCtrl.navigateForward('/singup/email');
	}

	async presentLoading() {
		const loading = await this.loadingController.create({
			message: 'Please wait...',
			duration: 2000
		});
		await loading.present();
		loading.onDidDismiss()
			.then((data) => {
				this.navCtrl.navigateForward('/customer');
			});
	}

	checkBiometric() {
		this.fingerprintAIO.isAvailable()
		.then(result => {
			console.log('is available', result);
			if (result === 'finger' || result === 'face') {
				// Fingerprint or Face Auth is available
				this.fingerprintAIO.show({
					clientId: 'Meed App',
					clientSecret: 'Meed App', // Only necessary for Android
				})
					.then((result: any) => {
						console.log('success failure fio', result);
						if (result === 'Success') {
							console.log('fingerprint success');
							this.secureStorage.create('meed_store').then((storage: SecureStorageObject) => {
								this.secureStorageHolder = storage;
								storage.get('username')
									.then(
										data => {
										 storage.get('password')
										.then(
											pass => {
												console.log('password get', pass);
											},
											error => console.log(error)
										);
											console.log('username get', data);

										},
										error => console.log(error)
									);

							});

						} else {
							// Fingerprint/Face was not successfully verified

							console.log('failure');
						}
					})
					.catch((error: any) => {
						// Fingerprint/Face was not successfully verified
					});
				}
			});


		this.secureStorage.create('meed_store').then((storage: SecureStorageObject) => {
			this.secureStorageHolder = storage;
		});

	}

}
