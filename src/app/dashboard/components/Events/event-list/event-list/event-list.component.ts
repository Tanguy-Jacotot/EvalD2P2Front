import { Component } from '@angular/core';
import { EventService } from '../../../../../services/event.service';
import { Event } from '../../../../../types';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  events: Event[] = [];

  constructor(private eventService: EventService) { 
  }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe({
      next: (events) => {
        this.events = events;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
