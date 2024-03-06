import { TestBed } from '@angular/core/testing';
import { EventService } from './event.service';
import { Event } from '../types'; 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EventService', () => {
  let service: EventService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventService]
    });
    service = TestBed.inject(EventService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
