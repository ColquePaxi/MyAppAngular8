import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-ng-ig',
  templateUrl: './sub-ng-ig.component.html',
  styleUrls: ['./sub-ng-ig.component.css']
})
export class SubNgIgComponent implements OnInit {

  constructor() {
     console.log('app-sub-ng-ig - constructor()');
   }

  ngOnInit() {
  }

  ngOnDestroy() {
     console.log('app-sub-ng-ig - ngOnDestroy()');
  }

}
