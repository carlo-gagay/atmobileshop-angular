import { NgModule } from "@angular/core";

import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { TourOfHeroesComponent } from "./tour-of-heroes.component";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TourOfHeroesRoutingModule } from "./tour-of-heroes-routing.module";

@NgModule({
    declarations:[
        HeroDetailComponent,
        HeroesComponent,
        TourOfHeroesComponent,
        MessagesComponent,
        DashboardComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        MatIconModule,
        MatCardModule,
        TourOfHeroesRoutingModule
    ],
    exports:[
        HeroDetailComponent,
        HeroesComponent,
        TourOfHeroesComponent
    ]
})

export class TourOfHeroesModule {}