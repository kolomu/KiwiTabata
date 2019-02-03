import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';

import { reducers } from './app.reducers';
import { TimerComponent } from './timer/timer.component';
import { CountdownComponent } from './timer/countdown/countdown.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    CountdownComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    FlexLayoutModule,
    NgCircleProgressModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
