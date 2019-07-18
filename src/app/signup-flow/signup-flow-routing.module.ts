import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'email',
		loadChildren: './singup-email/singup-email.module#SingupEmailPageModule'
	},
	{
		path: 'createlogin',
		loadChildren: './create-login/create-login.module#CreateLoginPageModule'
	},
	{
		path: 'createaccount',
		loadChildren: './create-account/create-account.module#CreateAccountPageModule'
	},
	{
		path: '',
		redirectTo: 'email',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SignupFlowRoutingModule { }