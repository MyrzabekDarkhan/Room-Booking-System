import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Room } from '../shared/room.types';
import { environment } from 'src/environments/environment';
import { RoomsService } from '../shared/rooms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

 
  form: FormGroup;

  room: Room;

  loading: boolean;

  isLoading: boolean;

  environment = environment;

  constructor(
    private roomsService: RoomsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      capacity: new FormControl('', Validators.required),
    });

    this.route.paramMap
    .pipe(
      mergeMap(params => {
        if (params.get('id')) {
          return this.roomsService.getById(+params.get('id'));
        }
        return of(null);
      })
    )
    .subscribe(room => {
      this.room = room;

      if (this.room) {
        this.form.patchValue(this.room);
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
    if (this.room) {
      this.roomsService.update({...this.room, ...this.form.value})
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

    this.roomsService.create(this.form.value)
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
