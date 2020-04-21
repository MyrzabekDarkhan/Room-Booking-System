import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../shared/rooms.service';
import {Room} from '../shared/room.types'


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

 
  constructor(private roomsService: RoomsService) { }

  
  rooms: Room[] = [];
  

  ngOnInit(): void {
    this.roomsService.getAll()
      .subscribe(data => {
        console.log(data)
        this.rooms = data;
      });

  

}



}
