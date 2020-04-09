import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Meetings } from '../shared/meetings.types';
import { environment } from 'src/environments/environment';
import { RoomsService } from '../shared/rooms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MeetingsService } from '../shared/meetings.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  form: FormGroup;

  meeting: Meetings;

  loading: boolean;

  isLoading: boolean;

  environment = environment;

  constructor(
    private meetingsService: MeetingsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      creatorId: new FormControl('', Validators.required),
      roomId: new FormControl('', Validators.required),
      meetingName: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required),
      roomName: new FormControl('', Validators.required),
    });

    this.route.paramMap
    .pipe(
      mergeMap(params => {
        if (params.get('id')) {
          return this.meetingsService.getById(+params.get('id'));
        }
        return of(null);
      })
    )
    .subscribe(meeting => {
      this.meeting = meeting;

      if (this.meeting) {
        this.form.patchValue(this.meeting);
      }
    });
  }

  onSubmit() {
    console.log('hello')
    for (const i in this.form.controls) {
       if (this.form.controls[i]) {
        this.form.controls[i].markAsDirty();
        this.form.controls[i].updateValueAndValidity();
       }
    }

  //  console.log('hello world')

    if (!this.form.valid) {
      return;
    }

    this.isLoading = true;
    if (this.meeting) {
      this.meetingsService.update({...this.meeting, ...this.form.value})
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res) {
          console.log(this.form.value);
          this.router.navigate(['home', 'room']);
        }
        this.isLoading = false;
      });
      return;
    }
    console.log('hello world')

    this.meetingsService.create(this.form.value)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res && res.id) {
         // console.log('hello world')
          this.router.navigate(['home', 'room']);
          this.isLoading = false;
        }
      });
  }

}

