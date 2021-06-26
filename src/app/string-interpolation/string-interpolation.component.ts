import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = 'Colque';

  person = {
     firstname: "Valter",
     lastname: "Paxi",
     age: 48,
     address: "Estrada Ita" 
  };

  age = 100;

  constructor() { }

  ngOnInit() {
  }

}
