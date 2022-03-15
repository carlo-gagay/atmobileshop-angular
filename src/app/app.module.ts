import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import {TestChildComponent } from './test-child/test-child.component';

import { IncludesModule } from './includes/includes.module';
import { PagesModule } from './pages/pages.module';

import { FormsModule } from '@angular/forms';

import { TourOfHeroesModule } from './tour-of-heroes/tour-of-heroes.module';

import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestChildComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    IncludesModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    TourOfHeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
