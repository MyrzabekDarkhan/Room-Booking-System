import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MeetingRoom } from "src/models/MeetingRoom";


@Injectable()
export class MeetingRoomService{
    constructor(
        @InjectRepository(MeetingRoom)
        private readonly meetingRoomRepository: Repository<MeetingRoom>
    ) {}

        
        getRooms(criteria = {}){
            return this.meetingRoomRepository.find(criteria);
        }

        getById(id:number){
            return this.meetingRoomRepository.findOne(id);
        }

        createRoom(room:MeetingRoom){
            return this.meetingRoomRepository.save(room);
        }

        updateRoom(id: number, data: Partial<MeetingRoom>) {
            return this.meetingRoomRepository.update(id, data);
        }
    
        deleteRoom(id: number) {
            return this.meetingRoomRepository.delete(id);
        }
}