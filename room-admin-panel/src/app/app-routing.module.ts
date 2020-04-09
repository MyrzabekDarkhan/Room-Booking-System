import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './room/room.component';
import { MeetingComponent } from './meeting/meeting.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
         children: [
          {
             path: 'meetings',
             component: MeetingsComponent
         },
         {
          path: 'meeting',
          component: MeetingComponent
        },
        {
          path: 'meeting/:id',
          component: MeetingComponent
        },
          {
           path: 'rooms',
             component: RoomsComponent
           },
           {
            path: 'room',
            component: RoomComponent
          },
          {
            path: 'room/:id',
            component: RoomComponent
          },
    
        
    ]
  }
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
