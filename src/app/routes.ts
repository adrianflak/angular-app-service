import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventListComponent } from "./event-list/event-list.component";


export const appRoutes:Routes = [
    {
        path: '', component: EventListComponent
    },
    {
        path: 'events/:eventId',component: EventDetailsComponent
    }
    
]

