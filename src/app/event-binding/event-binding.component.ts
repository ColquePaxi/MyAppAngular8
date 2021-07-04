import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName:String = "My Button";
  i = 0;   
  spinnerMode = "determinate";
  btnEnable = true;
  selectDisabled = false;
  selectedOption = '1';

  constructor() { }

  ngOnInit() {
  }

  save() {
     console.log("Click");
  }

  inc() {
     this.i++;
     this.buttonName = " It was clicked " + this.i + " times";
  }

   disable() {
     this.btnEnable = false;
     this.spinnerMode = "indeterminate";
     setTimeout( () => {
        this.btnEnable = true;
        this.spinnerMode = "determinado";
     }, 3000 );
   }

   cbChange(event) {
      console.log(event.checked);
      this.selectDisabled = event.checked;      
   }

   selectionChange(event) {
      console.log(event);
      console.log(event.value);
      this.selectedOption = event.value;
   }

}
