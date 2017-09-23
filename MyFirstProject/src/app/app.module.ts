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
import {VideosComponent} from './components/videos';
import {RouterModule} from '@angular/router';
import {routes} from '../routes';
import {NotFoundComponent} from './components/not-found';
import {AuthGuard} from './guards/auth-guard';
import {DashboardComponent} from './components/dashboard';
import {AccountsComponent} from './components/accounts';
import {SingleVideoComponent} from './components/single-video';
import {AnonGuard} from './guards/anon-guard';
import {FlexAlignmentHackDirective} from './directives/flex-alignment-hack';
import {TruncatePipe} from './pipes/truncate';

@NgModule({
  declarations: [
    AppComponent,
    CodekampComponent,
    LoginComponent,
    VideosComponent,
    NotFoundComponent,
    DashboardComponent,
    AccountsComponent,
    SingleVideoComponent,
    FlexAlignmentHackDirective,
    TruncatePipe
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
  providers: [InvidzService, AuthGuard, AnonGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}


// https://api.invidz.com/api
