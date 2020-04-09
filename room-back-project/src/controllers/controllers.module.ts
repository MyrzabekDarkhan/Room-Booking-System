import { Module } from "@nestjs/common";
import { Meeting } from "src/models/Meeting";
import { MeetingRoom } from "src/models/MeetingRoom";
import { Participation } from "src/models/Participation";
import { User } from "src/models/User";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { MeetingController } from "./meeting.controller";
import { MeetingService } from "./meeting.service";
import { MeetingRoomController } from "./meetingRoom.controller";
import { MeetingRoomService } from "./meetingRoom.service";
import { ParticipationController } from "./participation.controller";
import { ParticipationService } from "./participation.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([User, Meeting, MeetingRoom,Participation])
    ],
    exports: [TypeOrmModule],
    controllers: [
        UserController,
        MeetingController,
        MeetingRoomController,
        ParticipationController
      
    ],
    providers: [
      UserService,
      MeetingService,
      MeetingRoomService,
      ParticipationService
    ],
})
    export class   ControllerModule{

    }