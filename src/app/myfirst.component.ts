import { Component } from "@angular/core";

@Component({
   // selector: 'myfirst', // usa no app.component.html <myfirst></myfirst>
   // O modo abaixo cria uma diretiva
   // selector: '[myfirst]', // usa no app.component.html <div myfirst></div> 
   // O modo abaixo cria uma classe como usado no css
   selector: '.myfirst',   // usa no app.component.html <div class="myfirst"></div> 
   
   /* Use assim qdo o html for muito pequeno e nao justifique criar um arquivo
   template: `
      <h1> My First Component, by Colque </h1>
   `
   */
  templateUrl: './myfirst.component.html',
  /* Assim fica limitado a usar esse estilo somente dentro desse componente
  styles:[`
  <style>
   .box1 {
      width: 200px;
      height: 100px;
      background: chartreuse;
      box-shadow: 5px 10px #CCCCCC;
   }
   </style>
  `]
  */
 styleUrls: ['./myfirst.component.css']
})

export class MyFirstComponent {

}