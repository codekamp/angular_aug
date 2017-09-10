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
import {SmsService} from './services/sms';
import {VideoService} from './services/video';

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
    ReactiveFormsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdSliderModule,
    MdInputModule,
    MdIconModule
  ],
  providers: [{provide: 'xyz', useClass: SmsService},
    {provide: 'API_KEY', useValue: 'qwerty'}, {provide: VideoService, useFactory: () => {
      return new VideoService(new SmsService());
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
