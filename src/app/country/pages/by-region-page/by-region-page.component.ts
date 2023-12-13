import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  @Input() public countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  searchByRegion(term: string) {
    this.countryService.seatchRegion(term)
      .subscribe(resp => {
        this.countries = resp;
      });
  }

}
