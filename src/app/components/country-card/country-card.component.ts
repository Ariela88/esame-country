import { Component, Input } from '@angular/core';
import { Country, CountryName } from '../../model/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {
  @Input() country?: Country;
  @Input() countryName?: CountryName;


}
