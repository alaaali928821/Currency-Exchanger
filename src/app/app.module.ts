import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GridCardComponent } from './grid-card/grid-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { StickyPanalComponent } from './sticky-panal/sticky-panal.component';
import { FormsModule } from '@angular/forms';
import { CurruncySelectorComponent } from './sticky-panal/curruncy-selector/curruncy-selector.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GridCardComponent,
    MainComponent,
    StickyPanalComponent,
    CurruncySelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
