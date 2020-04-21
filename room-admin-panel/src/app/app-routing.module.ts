import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './room/room.component';
import { MeetingsComponent } from './meetings/meetings.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
         children: [
    
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
          {
          path: 'meetings',
          component: MeetingsComponent
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
