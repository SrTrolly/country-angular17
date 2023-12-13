import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }


  searchCountryByAlphaCode(code: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchCapital(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${term}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

  seatchCountry(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${term}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      )
  }

  seatchRegion(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${term}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      )
  }
}
