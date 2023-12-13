import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  @Input() public countries: Country[] = [];

  constructor(private countryService: CountryService) { }


  searchByCountry(term: string) {
    this.countryService.seatchCountry(term)
      .subscribe(resp => {
        this.countries = resp;
      });
  }

}
