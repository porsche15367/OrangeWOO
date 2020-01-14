import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-filters',
  templateUrl: './configuration-filters.component.html',
  styleUrls: ['./configuration-filters.component.css']
})
export class ConfigurationFiltersComponent implements OnInit {
  cities;
  cars;
  selectedCars1: string[] = [];
  selectedCity = "Welcome Mona Ali ";
  value: Date;
  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  this.cars = [
    {label: 'Audi', value: 'Audi'},
    {label: 'BMW', value: 'BMW'},
    {label: 'Fiat', value: 'Fiat'},
    {label: 'Ford', value: 'Ford'},
    {label: 'Honda', value: 'Honda'},
    {label: 'Jaguar', value: 'Jaguar'},
    {label: 'Mercedes', value: 'Mercedes'},
    {label: 'Renault', value: 'Renault'},
    {label: 'VW', value: 'VW'},
    {label: 'Volvo', value: 'Volvo'},
];
   }

  ngOnInit() {
  }

}
