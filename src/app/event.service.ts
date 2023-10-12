import { Injectable } from '@angular/core';

export type eventType = {
  id: number;
  name: string;
  date: string;
  time: string;
  location: {
    city: string;
    street: string;
    street_number: number;
    country: string;
  };
  format: string;
  onlineUrl: string;
}

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


  getEvent(eventId: number) {
    return this.EVENTS.find(event => event.id === eventId)
  }
  getEvents(): eventType[] {
    return this.EVENTS
  }
  saveEvent(event: eventType) {
    event.id = 90
    this.EVENTS.push(event)
  }

  getEmptyEvent(): eventType {
    return {
      date: '',
      format: '',
      id: 0,
      name: '', 
      onlineUrl: '', 
      time: '', 
      location: {
        city: '',
        country: '',
        street: '',
        street_number: 0
      }
    }
  }

}
