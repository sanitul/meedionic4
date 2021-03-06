import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SingupEmailPage } from './singup-email.page';

const routes: Routes = [
	{
		path: '',
		component: SingupEmailPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [SingupEmailPage]
})
export class SingupEmailPageModule { }
