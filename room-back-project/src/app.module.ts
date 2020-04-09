import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User } from './models/User';

import { join } from 'path';
import { Meeting } from './models/Meeting';
import { MeetingRoom } from './models/MeetingRoom';
import { Participation } from './models/Participation';
import { ControllerModule } from './controllers/controllers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'217.182.72.53',
      username:'miras',
      password:'xO5A7IvE',
      database:'darkhanDB',
      entities:[User,Meeting,MeetingRoom,Participation],
      synchronize:false,
    }),
    ControllerModule
  
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}
