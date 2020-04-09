import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MeetingRoom } from "src/models/MeetingRoom";
import { Participation } from "src/models/Participation";


@Injectable()
export class ParticipationService{
    constructor(
        @InjectRepository(Participation)
        private readonly participationRepository: Repository<Participation>
    ) {}

        
        getParticipants(){
            return this.participationRepository.find();
        }

        getById(id:number){
            return this.participationRepository.findOne(id);
        }

        createParticipant(participant:Participation){
            return this.participationRepository.save(participant);
        }

        updateParticipant(id: number, data: Partial<Participation>) {
            return this.participationRepository.update(id, data);
        }
    
        deleteParticipant(id: number) {
            return this.participationRepository.delete(id);
        }
}