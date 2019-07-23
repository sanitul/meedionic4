import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform, } from '@ionic/angular';
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
		private secureStorage: SecureStorage,
		public platform: Platform
	) { }
	/**
	 * ngOnInit()
	 * Initialize the singup form control and set the default value
	 */
	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: new FormControl(''),
			password: new FormControl('')
		});
	}
	/**
	 * doLogin() login form submit event
	 * if login form have both fields values then reset the login form and navigate to customer panel dashboard.
	 */
	doLogin(credentials: any) {
		if (credentials.username && credentials.password) {
			this.presentLoading((success) => {
				this.loginForm.reset();
				this.navCtrl.navigateForward('/customer');
			});
		}
	}
	/**
	 * gotoCreateLogin() from button click event
	 * navigate to singup flow feature module, default route to email singup screen
	 */
	gotoCreateLogin() {
		this.navCtrl.navigateForward('/singup/email');
	}
	/**
	 * presentLoading()
	 * show app loading component with autohide in 2 seconds.
	 */
	async presentLoading(successCallback) {
		const loading = await this.loadingController.create({
			message: 'Please wait...',
			duration: 2000
		});
		await loading.present();
		loading.onDidDismiss()
			.then((data) => {
				successCallback(data);
			});
	}
	/**
	 * checkBiometric() from button click event
	 * Proceed fingerprint authentication using fingerprint sensors or FaceID and device's secure storage
	 */
	checkBiometric() {
		if (!this.platform.is('cordova')) {
			return false;
		}
		this.fingerprintAIO.isAvailable().then(isAvailableSuccess => {
				if (isAvailableSuccess === 'finger' || isAvailableSuccess === 'face') {
					// Fingerprint or Face Auth is available
					this.fingerprintAIO.show({
						clientId: 'Meed App', // Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
						clientSecret: 'Meed App', // Necessary for Android encrpytion of keys. Use random secret key.
					}).then((result: any) => {
						if (result === 'Success') {
							this.presentLoading((success) => {
								this.navCtrl.navigateForward('/customer');
							});
							this.secureStorage.create('meed_store').then((storage: SecureStorageObject) => {
								this.secureStorageHolder = storage;
								storage.get('username').then((username) => {
									storage.get('password').then((pass) => {
									}, (errorPasssword) => {
									});
								}, (errorUsername) => {
								});
							});
						} else {
							// Fingerprint/Face was not successfully verified
							this.secureStorage.create('meed_store').then((storage: SecureStorageObject) => {
								this.secureStorageHolder = storage;
							});
						}
					}).catch((error: any) => {
						// Fingerprint/Face was not successfully verified
						this.secureStorage.create('meed_store').then((storage: SecureStorageObject) => {
							this.secureStorageHolder = storage;
						});
					});
				}
			});
	}
}
