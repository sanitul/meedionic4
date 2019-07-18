import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'singup-email', pathMatch: 'full' },
	{ path: 'login', loadChildren: './login/login.module#LoginPageModule' },
	{ path: 'details-screen', loadChildren: './details-screen/details-screen.module#DetailsScreenPageModule' },
	{ path: 'singup-email', loadChildren: './singup-email/singup-email.module#SingupEmailPageModule' },
	{ path: 'create-login', loadChildren: './create-login/create-login.module#CreateLoginPageModule' },
	{ path: 'login-screen', loadChildren: './login-screen/login-screen.module#LoginScreenPageModule' },
	{ path: 'create-account', loadChildren: './create-account/create-account.module#CreateAccountPageModule' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
