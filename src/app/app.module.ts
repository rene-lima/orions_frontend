import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {HomeComponent} from './home/home.component';
import {QuemSomosComponent} from './quem-somos/quem-somos.component';
import {routing} from './app.routing'

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HomeComponent, QuemSomosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
