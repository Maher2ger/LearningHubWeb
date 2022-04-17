import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {AuthGuard} from "./services/guards/auth.guard";

const routes: Routes = [
	{path: '', component: DashboardComponent,canActivate: [AuthGuard]},
	{path: 'login', component: LoginComponent,},
	{path: 'signup', component: SignupComponent},]

@NgModule({
	          imports                                    : [
		          RouterModule.forRoot(routes),],
	          exports                                    : [RouterModule],
	          providers                                  : [AuthGuard]
          })

export class AppRoutingModule {
}
