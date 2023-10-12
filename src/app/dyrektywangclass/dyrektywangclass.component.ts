import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dyrektywangclass',
  standalone: true,
  imports: [CommonModule],
  template: `
  
    <div *ngFor="let event of events">
    <h2 [ngClass]="getTitleClass(event.format)">{{event.name}}</h2>
      <div>Data: {{event.date}}</div>
      <div>Godzina: {{event.time}}</div>  
      <div *ngIf="event.location">
      <span>
        Miasto: {{event?.location?.city}}
        Lokalizacja: {{event?.location?.street}}
        Kraj: {{event?.location?.country}}
      </span>

      </div>

        <div *ngIf="event.onlineUrl">
          OnlineUrl: {{event?.onlineUrl}}
        </div>
        
        
        </div>
 
  `,
  styles: [`
    .online {
      background-color: blue;
    }
    .offline {
      background-color: red;
    }
    .home {
      background-color: grey;
    }
    `
  ]
})
export class DyrektywangclassComponent {

  events = [
    {
      name: 'Spotkanie 1',
      date: '14.09.2023',
      time: '18.00',
      location: {
        city: 'Gdansk',
        street: 'Długa',
        street_number: 2,
        country: "Poland"
      },
      format: "online",
      onlineUrl: 'https://xyz.pl'
    },
    {
      name: 'Spotkanie 1',
      date: '14.09.2023',
      time: '18.00',
      location: {
        city: 'Gdansk',
        street: 'Długa',
        street_number: 2,
        country: "Poland"
      },
      format: "offline",
      onlineUrl: 'https://xyz.pl'
    },
    {
      name: 'Spotkanie 1',
      date: '14.09.2023',
      time: '18.00',
      location: {
        city: 'Gdansk',
        street: 'Długa',
        street_number: 2,
        country: "Poland"
      },
      format: "home",
      onlineUrl: 'https://xyz.pl'
    }
  ]

  getTitleClass(formatwydarzenia: string) {
    if (formatwydarzenia === 'home')
      return ['home']
    if (formatwydarzenia === 'online')
      return ['online']

    return ['offline']
  }
}  
