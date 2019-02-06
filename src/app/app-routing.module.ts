import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayLotteryComponent } from './main-body/display-lottery/display-lottery.component';
import { CreateLotteryComponent } from './main-body/create-lottery/create-lottery.component';
import { LoginComponent } from './main-body/login/login.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  { path: '', component: DisplayLotteryComponent},
  { path: 'createNew', component: CreateLotteryComponent, canActivate: [AuthGuardGuard]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
