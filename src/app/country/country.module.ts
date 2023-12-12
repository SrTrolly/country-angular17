import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryRoutingModule } from './country-rounting.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByRegionPageComponent,
    ByCountryPageComponent,
    ByCountryPageComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    SharedModule
  ]
})
export class CountryModule { }
