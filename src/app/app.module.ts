import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BasicsComponent } from './basics/basics.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'basics', component: BasicsComponent }
    ])
  ],
  declarations: [ AppComponent, HelloComponent, BasicsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
