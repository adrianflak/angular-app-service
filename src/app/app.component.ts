import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { PierwszyComponent } from './pierwszy/pierwszy.component';
import { DrugiComponent } from './drugi/drugi.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { App2Component } from './app2/app2.component';
import { DyrektywangclassComponent } from './dyrektywangclass/dyrektywangclass.component';
import { EventListComponent } from './event-list/event-list.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    EventListComponent,
    RouterModule],
  template: `
  <!-- <app-event-list></app-event-list>
       <app-dyrektywangclass></app-dyrektywangclass> -->
  
  <router-outlet></router-outlet>

   
  `,
  styles: [],
})
export class AppComponent  {


  
}
