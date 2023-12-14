import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryRoutingModule } from './country-rounting.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { ContryPageComponent } from './pages/contry-page/contry-page.component';




@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByRegionPageComponent,
    ByCountryPageComponent,
    ByCountryPageComponent,
    CountryTableComponent,
    ContryPageComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    SharedModule,
  ]
})
export class CountryModule { }
