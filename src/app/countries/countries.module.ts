import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule, HttpClientModule, BrowserModule

  ],
  exports: [CountriesComponent]
})
export class CountriesModule { }
