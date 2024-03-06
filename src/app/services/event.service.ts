import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../types';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl: string = 'https://functionapp-240306131637.azurewebsites.net';

  constructor(private httpClient: HttpClient) {}

  getAllEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.baseUrl);
  }

  addEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.baseUrl, event);
  }

  updateEvent(eventId: string, event: Event): Observable<Event> {
    return this.httpClient.put<Event>(`${this.baseUrl}/${eventId}`, event);
  }

  deleteEvent(eventId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${eventId}`);
  }

  getEventById(eventId: string): Observable<Event> {
    return this.httpClient.get<Event>(`${this.baseUrl}/${eventId}`);
  }
}
