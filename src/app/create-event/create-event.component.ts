import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EventService, eventType } from '../event.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [CommonModule,
  RouterModule,
FormsModule],
  template: `
    <form *ngIf="event" #eventForm="ngForm" (ngSubmit)="saveEvent(eventForm.value)">
      <div class="form-group">
        <label for="name">Name: {{event.name}}</label>
        <input type="text" name="name" id="name" [(ngModel)]="event.name">
      </div>
      <div class="form-group">
        <label for="date">Date: {{event.date}}</label>
        <input type="text" name="date" id="date" [(ngModel)]="event.date">
      </div>
        <label for="time">Time: {{event.time}}</label>
        <input type="text" name="time" id="time" [(ngModel)]="event.time">
      <div class="form-group">
        <label for="city">City: {{event.location.city}}</label>
        <input type="text" name="city" id="city" [(ngModel)]="event.location.city">
      </div>
      <div class="form-group">
        <label for="country">Country: {{event.location.country}}</label>
        <input type="text" name="country" id="country" [(ngModel)]="event.location.country">
      </div>
      <button type="submit" onsubmit="saveEvent()">Save</button>
      <button (click)="cancel">Cancel</button>
      
    </form>

  `,
  styles: [
  ]
})
  export class CreateEventComponent {
    event : eventType | undefined
    constructor(private eventService:EventService, private router:Router) {
      this.event = eventService.getEmptyEvent()
    }

    saveEvent(event: eventType) {
      console.log("TEKST")
      this.eventService.saveEvent(event)
      this.router.navigate([''])
    }

    cancel() {
      this.router.navigate(['/events'])
    }
    logForm(value: any) {
      console.log(value) 
    }
    
}
