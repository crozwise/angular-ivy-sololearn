import { Component, VERSION } from '@angular/core';
import { Car } from './car';
import { TransportationService } from './transportation.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cars: Car[];
  constructor(private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars();
  }

  name = 'star student';

  speak() {
    const sentence = this.name;
    return sentence;
  }
  saySomething() {
    alert('good day Caglar.');
  }
  counter = 0;
  increment() {
    this.counter++;
  }
  phrase = "It's going";
  update() {
    this.phrase += ' ..and going';
  }
  username: string;
  addCar( ) {
    const newCar: Car = {make: "Tesla", model: "X", miles: 100 };
    this.transportationService.addCar(newCar);
  }
}
