import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../event.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, RouterModule
  ],
  template: `
        <h1>Event Details</h1>
        <div>{{event.name}}</div>
        <div>{{event.date}}</div>
        <div>{{event.time}}</div>
        <div>{{event.location.city}}</div>

        <div class="back-to-home">
          <a [routerLink]="['/']">Back to home</a>
        </div>
  `,
  styles: [
  ]
})
export class EventDetailsComponent {

  event: any

  constructor(private eventService: EventService,
    private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['eventId'])
  }

}
