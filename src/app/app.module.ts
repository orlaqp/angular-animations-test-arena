import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BasicsComponent } from './basics/basics.component';
import { InOutComponent } from './in-out/in-out.component';
import { QueryStaggerComponent } from './query-stagger/query-stagger.component';
import { FilteringComponent } from './filtering/filtering.component';

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'basics', component: BasicsComponent },
      { path: 'in-out', component: InOutComponent },
      { path: 'query-stagger', component: QueryStaggerComponent },
      { path: 'filtering', component: FilteringComponent },
    ])
  ],
  declarations: [ AppComponent, HelloComponent, BasicsComponent, InOutComponent, QueryStaggerComponent, FilteringComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
