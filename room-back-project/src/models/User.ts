
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Meeting} from './Meeting';
import { Participation } from './Participation';

@Entity({name:'users'})
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @OneToMany(type=>Meeting,meeting=>meeting.creatorId)
    meetings: Promise<Meeting[]>

    @OneToMany(type => Participation,participation => participation.meetingId)
    participations:Promise<Participation[]>




    

}