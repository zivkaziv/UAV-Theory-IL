import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { DashboardStudentComponent }   from './components/dashboardstudent/dashboardstudent.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';

import { HeroService }  from './services/hero.service';
import { MaterialModule } from '@angular/material';
import { ExpansionPanelsModule } from 'ng2-expansion-panels';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    MaterialModule.forRoot(),
    ExpansionPanelsModule
    ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    DashboardStudentComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
