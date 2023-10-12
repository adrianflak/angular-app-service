import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private EVENTS = [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
   
    
  getEvent(eventId:number) {
    return this.EVENTS.find(event => event.id === eventId)
  }
  getEvents() {
    return this.EVENTS
  }

}
