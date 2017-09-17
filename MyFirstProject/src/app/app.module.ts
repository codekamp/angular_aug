import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';

import {AppComponent} from './app.component';
import {CodekampComponent} from './codekamp';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdProgressSpinnerModule,
  MdSliderModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InvidzService} from './services/invidz';
import {HttpModule} from '@angular/http';
import {VideoComponent} from './components/videos';
import {RouterModule} from '@angular/router';
import {routes} from '../routes';
import {NotFoundComponent} from './components/not-found';
import {AuthGuard} from './guards/auth-guard';
import {DashboardComponent} from './components/dashboard';
import {AccountsComponent} from './components/accounts';

@NgModule({
  declarations: [
    AppComponent,
    CodekampComponent,
    LoginComponent,
    VideoComponent,
    NotFoundComponent,
    DashboardComponent,
    AccountsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdSliderModule,
    MdInputModule,
    MdIconModule,
    MdProgressSpinnerModule,
  ],
  providers: [InvidzService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}


// https://api.invidz.com/api
