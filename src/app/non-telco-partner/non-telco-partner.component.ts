
import { Component, OnInit } from '@angular/core';
import { GeneralService } from './../services/general.service';


@Component({
  selector: 'app-non-telco-partner',
  templateUrl: './non-telco-partner.component.html',
  styleUrls: ['./non-telco-partner.component.css'],

})
export class NonTelcoPartnerComponent implements OnInit {
  displayDialog: boolean;

    car = {};

    selectedCar;

    newCar: boolean;

    cars: any[];

    cols: any[];


  constructor(private GeneralService:GeneralService) {}

  ngOnInit() {
    this.GeneralService.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [
        { field: 'vin', header: 'PARTNER_ID' },
        { field: 'year', header: 'ACTIVATE_DATE' },
        { field: 'brand', header: 'DESCRIPTION' },
        { field: 'color', header: 'HANDSET DATA' }
    ];
  }
  showDialogToAdd() {
    this.newCar = true;
    this.car = {};
    this.displayDialog = true;
}

save() {
    let cars = [...this.cars];
    if (this.newCar)
        cars.push(this.car);
    else
        cars[this.cars.indexOf(this.selectedCar)] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
}

cancel(){
  this.displayDialog = false;
}

delete() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i != index);
    this.car = null;
    this.displayDialog = false;
}

onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
}

cloneCar(c) {
    let car = {};
    for (let prop in c) {
        car[prop] = c[prop];
    }
    return car;
}
 

}
