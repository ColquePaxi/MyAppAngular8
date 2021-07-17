import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
     "Ze",
     "Du",
     "Ana",
     "Angelica",
     "Valter"
  ];

  cities = [
     {name: 'Sao Paulo', state: 'SP'},
     {name: 'Rio de Janeiro', state: 'RJ'},
     {name: 'Londrina', state: 'PR'},
     {name: 'Aracaju', state: 'SE'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
