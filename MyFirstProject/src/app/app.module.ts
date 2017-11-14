import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';

import {AppComponent} from './app.component';
import {CodekampComponent} from './codekamp';
import {
  MdButtonModule, MdCardModule, MdDatepickerModule, MdDatepickerToggle, MdDialogModule, MdIconModule, MdInputModule,
  MdMenuModule,
  MdNativeDateModule,
  MdProgressSpinnerModule,
  MdSliderModule, MdSnackBarModule
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
import {HeaderComponent} from './components/header';
import {StoreModule} from '@ngrx/store';
import {myReducer} from './reducers/index';
import {AlertService} from './services/alert';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ConfirmationComponent} from 'app/components/confirmation';

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
    TruncatePipe,
    HeaderComponent,
    ConfirmationComponent
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
    MdMenuModule,
    StoreModule.provideStore(myReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    MdDatepickerModule,
    MdNativeDateModule,
    MdSnackBarModule,
    MdDialogModule
  ],
  providers: [AlertService, InvidzService, AuthGuard, AnonGuard],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationComponent]
})
export class AppModule {
}


// https://api.invidz.com/api
