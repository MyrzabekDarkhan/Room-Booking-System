import { Component, OnInit } from '@angular/core';
import { MeetingsService } from '../shared/meetings.service';
import { Meetings } from '../shared/meetings.types';


@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

  constructor(private meetingsService: MeetingsService) { }

  meetings: Meetings[] = [];
  rooms: Meetings[] = [];
  

  ngOnInit(): void {
    this.meetingsService.getAll()
      .subscribe(data => {
        console.log(data)
        this.meetings = data;
      });

  
      

  
  }

}