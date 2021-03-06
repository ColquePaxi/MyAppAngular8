import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule,
         MatSelectModule, 
         MatRadioModule,
         MatCheckboxModule,
         MatInputModule, 
         MatListModule,
         MatDividerModule,
         MatIconModule,
         MatButtonModule,
         MatFormFieldModule
      } from '@angular/material';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { SubNgIgComponent } from './ng-if/sub-ng-ig/sub-ng-ig.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForFormComponent } from './ng-for-form/ng-for-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    SubNgIgComponent,
    NgForComponent,
    NgForFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
