import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  template: `
           <table>
            <thead>
              <th>Event</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
            </thead>
            <tbody>
              <tr *ngFor="let event of events">
                <td>{{event.name}}</td>
                <td>{{event.date}}</td>
                <td>{{event.time}}</td>
                <td>{{event.location.city}}</td>
              </tr>
            </tbody>
           </table>
  `,
  styles: [
  ]
})
export class EventListComponent {
    
  constructor(private eventService:EventService){
  }
  events = this.eventService.getEvents()
  
}
