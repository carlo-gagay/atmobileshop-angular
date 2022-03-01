import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from '../app-routing.module';

import { IncludesRoutingModule } from './includes-routing.module';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    TopnavComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    AppRoutingModule,
    IncludesRoutingModule
  ],
  exports: [
    TopnavComponent,
    SidenavComponent,
    HeaderComponent
  ]
})
export class IncludesModule { }
