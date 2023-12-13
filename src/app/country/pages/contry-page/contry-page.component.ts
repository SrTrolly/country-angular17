import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-contry-page',
  templateUrl: './contry-page.component.html',
  styleUrl: './contry-page.component.css'
})
export class ContryPageComponent implements OnInit {


  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({ id }) => {
        this.countryService.searchCountryByAlphaCode(id).subscribe(country => {
          console.log(country);
        })
      })
  }

}
