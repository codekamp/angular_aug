import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import {CodekampComponent} from './codekamp';
import {MdButtonModule, MdCardModule, MdSliderModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CodekampComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MdButtonModule,
    MdCardModule,
    MdSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
