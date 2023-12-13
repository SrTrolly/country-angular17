import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-contry-page',
  templateUrl: './contry-page.component.html',
  styleUrl: './contry-page.component.css'
})
export class ContryPageComponent implements OnInit {


  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchCountryByAlphaCode(id)),
      ).subscribe(country => {
        if (!country) {
          return this.router.navigateByUrl("");
        }
        console.log("tenemos un pais")
        return;
      })

  }

}
