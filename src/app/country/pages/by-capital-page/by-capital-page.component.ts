import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries: Country[] = []


  constructor(private countryService: CountryService) { }

  searchByCapital(term: string): void {
    this.countryService.searchCapital(term).subscribe(resp => {
      this.countries = resp;
    });
  }

}
