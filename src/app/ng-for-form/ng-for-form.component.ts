import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

   var_name: string = "";
   var_address: string = "";
   var_phone: string = "";
   var_city: string = "";
   var_age: number = 0;
   
   var_cities = [
      {name: 'Sao Paulo', state: 'SP'},
      {name: 'Rio de Janeiro', state: 'RJ'},
      {name: 'Londrina', state: 'PR'},
      {name: 'Aracaju', state: 'SE'},
   ];

   clients = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clients.push(
       {
          name: this.var_name,
          address: this.var_address,
          phone: this.var_phone,
          city: this.var_city,
          age: this.var_age,            
       }
    );
    console.log(this.clients);
    this.cancel();
  }

  cancel() {
    this.var_name = "";
    this.var_address = "";
    this.var_phone = "";
    this.var_city = "";
    this.var_age = 0;
  }

  delete(i: number) {
     // Passa o id do parâmetro e a quantidade de registros que quer aplicar a ação
     this.clients.splice(i,1); 
  }

}
