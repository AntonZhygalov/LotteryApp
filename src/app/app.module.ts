import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { DisplayLotteryComponent } from './main-body/display-lottery/display-lottery.component';
import { CreateLotteryComponent } from './main-body/create-lottery/create-lottery.component';
import { DataserviceService } from './services/dataservice.service';
import { LoginComponent } from './main-body/login/login.component';
import { LoginService } from './services/login.service';
import { AuthGuardGuard } from './services/auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    DisplayLotteryComponent,
    CreateLotteryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataserviceService, LoginService, AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
