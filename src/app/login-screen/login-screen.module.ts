import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage/ngx';

import { LoginScreenPage } from './login-screen.page';

const routes: Routes = [
	{
		path: '',
		component: LoginScreenPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [LoginScreenPage],
	providers: [
		FingerprintAIO,
		SecureStorage
	]
})
export class LoginScreenPageModule { }
