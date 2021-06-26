import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  // Essa propriedade poder� ser usada no property-binding.component.html de forma din�mica 
  color:String = "accent";
  btnDisabled:Boolean = true; 
  colors = ['primary','accent','warn']; 
  idx = 0;

  constructor() { }

  ngOnInit() {

    setInterval( () => {
       this.idx = (this.idx + 1) % this.colors.length;
    } ,1000);

  }

}
