import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

   v_showName: Boolean = false;
   v_showAddress: Boolean = false;
   v_showPhone: Boolean = false;
   v_showAge: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
