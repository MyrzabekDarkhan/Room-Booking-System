import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/models/User";
import { Meeting } from "src/models/Meeting";
import { MeetingRoom } from "src/models/MeetingRoom";


@Injectable()
export class MeetingService{
    constructor(
        @InjectRepository(Meeting)
        private readonly meetingRepository: Repository<Meeting>,
        //private readonly meetingRoomRepository: Repository<MeetingRoom>
    ) {}

        
        getMeetings(){
            return this.meetingRepository.find();
        }

        // getMeetingsAndRooms(){
        //     return this.meetingRepository.
        // }

        getById(id:number){
            return this.meetingRepository.findOne(id);
        }

        addMeeting(meeting:Meeting){
            return this.meetingRepository.save(meeting);
        }

        updateMeeting(id: number, data: Partial<User>) {
            return this.meetingRepository.update(id, data);
        }
    
        deleteMeeting(id: number) {
            return this.meetingRepository.delete(id);
        }




}