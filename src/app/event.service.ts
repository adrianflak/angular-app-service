import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getEvents() {
    return [
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
  } 

}
