import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Country, CountryName } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  baseUrl = 'https://restcountries.com/v3.1/region/europe';

  constructor(private http: HttpClient) { }

  getAllCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl);
  }

  getAllCountryNames(): Observable<CountryName[]> {
    return this.http.get<Country[]>(this.baseUrl)
      .pipe(
        map(countries => countries.map(country => country.name))
      );
  }
}
