import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';

import {AppComponent} from './app.component';
import {CodekampComponent} from './codekamp';
import {MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdSliderModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InvidzService} from './services/invidz';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CodekampComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdSliderModule,
    MdInputModule,
    MdIconModule
  ],
  providers: [InvidzService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


// https://api.invidz.com/api
