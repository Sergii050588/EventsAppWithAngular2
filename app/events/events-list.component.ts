import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular 2 Component</h1>
            <hr>
            <event-thumbnail [event]="event1"></event-thumbnail>
        </div>
    `
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Component',
        date: '04/02/2017',
        time: '10:00 am',
        price: 598,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: 'Gongadze district',
            city: 'Kiev',
            country: 'Ukraine'
        }
    }
}