import {Component, Input} from '@angular/core'
import {IEvent} from "./shared/event.model";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late start)</span>
                <span *ngSwitchDefault>(Normal start)</span>
            </div>
            <div [hidden]="!event?.price">Price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.adress}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
        </div>
    `,
    styles: [`        
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})

export class EventThumbnailComponent{
    @Input() event:IEvent

    getStartTimeStyle():any {
        if (this.event && this.event.time == '8:00 am') {
            return {color: '#003300', 'font-weight': 'bold'}
        }
        else if (this.event && this.event.time == '10:00 am') {
            return { color: '#009232' }
        }
        return { }
    }
}