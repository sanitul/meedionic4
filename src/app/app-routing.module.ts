import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
/**
 * App top-level module that is dedicated to routing and imported by the root AppModule
 * Lazy Loading Feature Modules routes.
 * default feature loads signup module, which contain all signup page,components etc
 */
const routes: Routes = [
	{ path: '', redirectTo: 'singup', pathMatch: 'full' },
	{ path: 'singup', loadChildren: './signup-flow/signup-flow.module#SignupFlowModule' },
	{ path: 'login', loadChildren: './login-screen/login-screen.module#LoginScreenPageModule' },
	{ path: 'customer', loadChildren: './customer-panel/customer-panel.module#CustomerPanelModule' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
