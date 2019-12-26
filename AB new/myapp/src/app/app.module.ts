import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdityabirlaComponent } from './adityabirla/adityabirla.component';

import {RouterModule} from '@angular/router'
 import {routes} from './app.routes';
import { CalculatorgoalComponent } from './calculatorgoal/calculatorgoal.component';
import { SelectgoalsComponent } from './selectgoals/selectgoals.component';
import { GoalsComponent } from './goals/goals.component';
import { TermgoalsComponent } from './termgoals/termgoals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdityabirlaComponent,
    CalculatorgoalComponent,
    SelectgoalsComponent,
    GoalsComponent,
    TermgoalsComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
     RouterModule.forRoot(routes),
     HttpClientModule
  ],
  providers: [GoalsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
