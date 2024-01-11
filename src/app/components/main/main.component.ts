import { Component, OnInit } from '@angular/core';
import { Country, CountryName } from '../../model/country';
import { ComunicationService } from '../../services/comunication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {
  countryNames?: CountryName[];
  countries: Country[] = [];
  sortedCountries: Country[] = [];
  param: string = 'name';
  sortOrder: string = 'asc';
  ascending: boolean = true;
  ascendingName: boolean = true;
  ascendingPopulation: boolean = true;
  currentSort: string = 'name';
  showWesternEurope: boolean = false;
  showSouthRegion: boolean = false;
  showEasternRegion: boolean = false;
  showNordestRegion: boolean = false;

  constructor(private comunication: ComunicationService) { }

  ngOnInit(): void {
    this.comunication.getAllCountry().subscribe((res) => {
      this.countries = res;
      this.sortCountries(this.param);
    });

    this.comunication.getAllCountryNames().subscribe((res) => (this.countryNames = res));
  }

  sortCountries(sortBy: string): void {
    this.currentSort = sortBy;


    let filteredCountries = this.countries;
    if (this.showWesternEurope) {
      filteredCountries = filteredCountries.filter(country => country.subregion === 'Western Europe');
    } else if (this.showSouthRegion) {
      filteredCountries = filteredCountries.filter(country => country.subregion === 'Southern Europe');
    } else if (this.showEasternRegion) {
      filteredCountries = filteredCountries.filter(country => country.subregion === 'Eastern Europe');
    } else if (this.showNordestRegion) {
      filteredCountries = filteredCountries.filter(country => country.subregion === 'Northern Europe');
    }

    filteredCountries.sort((a, b) => {
      if (this.currentSort === 'population') {
        return this.sortOrder === 'asc' ? a.population - b.population : b.population - a.population;
      } else if (this.currentSort === 'name') {
        return this.sortOrder === 'asc' ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common);
      }
      return 0;
    });

    this.sortedCountries = [...filteredCountries];
  }

  toggleSortOrder(sortBy: string): void {
    if (this.currentSort !== sortBy) {
      this.sortOrder = 'asc';
      this.ascending = false
    } else {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      this.ascending = true
    }

    this.sortCountries(sortBy);
  }


  filterCountries(subregion: string): void {

    if (subregion !== 'Western Europe') {
      this.showWesternEurope = false;
    }
    if (subregion !== 'Eastern Europe') {
      this.showEasternRegion = false;
    }
    if (subregion !== 'Southern Europe') {
      this.showSouthRegion = false;
    }
    if (subregion !== 'Northern Europe') {
      this.showNordestRegion = false;
    }

    this.sortCountries(this.param);
  }

}

