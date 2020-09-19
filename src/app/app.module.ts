import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesModule } from './countries/countries.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CountriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
