import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { User } from "./User";
import { Participation } from "./Participation";
import { MeetingRoom } from './MeetingRoom';



@Entity({name:'meetings'})
export class Meeting{
   
    @PrimaryGeneratedColumn()
    Id:string;

    @Column()
    Subject:string;

    @Column()
    roomId:number;
    
     @Column()
     userId:number;

   @Column({type:"datetime"})
    StartTime:string;

    @Column({type:"datetime"})
    EndTime:string;
   
    @Column({ type: 'boolean', default: false })
    IsReadonly: boolean;


    @ManyToOne(type=>User,user=>user.id)
    user:User;
   
    @OneToMany(type => Participation,participation => participation.meetingId)
    participations:Promise<Participation[]>

    @ManyToOne(type => MeetingRoom,room=>room.id)
    room:MeetingRoom
    
}