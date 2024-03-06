import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventService } from '../../../../../services/event.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  eventForm!: FormGroup;
  message = '';
  errorMessage = '';

  constructor(
    private eventService: EventService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['',],
      date: ['', ],
      time: ['',],
      location: ['',]
    });
  }

  get f() { return this.eventForm.controls; }

  onSubmit() {
    if (this.eventForm.invalid) {
      return;
    }

    this.eventService.addEvent(this.eventForm.value).subscribe({
      next: () => {
        this.message = 'Event successfully added!';
        setTimeout(() => {
          this.router.navigate(['/events']); // Adjust the route as per your routing settings
        }, 2000);
      },
      error: (error) => {
        console.error('Error adding event', error);
        this.errorMessage = 'Error adding event, please retry';
      }
    });
  }
}
