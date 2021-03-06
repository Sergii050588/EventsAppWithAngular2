import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from "@angular/router"
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventsListResolver

} from './events/index'
import { NavBarComponent } from "./nav/navbar.component";
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { EventsAppComponent } from "./events-app.component";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventsListResolver,
        AuthService
    ],
    bootstrap: [
        EventsAppComponent
    ]
})

export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
    if(component.isDirty)
        return window.confirm('Do you really want to leave this page without saving?')
    return true
}