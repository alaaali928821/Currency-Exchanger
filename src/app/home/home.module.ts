import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { GridCardComponent } from './grid-card/grid-card.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CurruncySelectorComponent } from './sticky-panal/curruncy-selector/curruncy-selector.component';
import { StickyPanalComponent } from './sticky-panal/sticky-panal.component';



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
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
