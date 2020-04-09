import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { User } from "./User";
import { Participation } from "./Participation";
import { MeetingRoom } from './MeetingRoom';



@Entity({name:'meetings'})
export class Meeting{
   
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    meetingName:string;

    @Column()
    creatorId:number;

    @Column()
    roomId:number;

    @CreateDateColumn()
    start_time:Date;

    @CreateDateColumn()
    end_time:Date;

    @Column()
    roomName:string;

    @Column({type:'boolean',default:0})
    isCanceled:Boolean;

    @ManyToOne(type=>User,user=>user.id)
    user:User;
   
    @OneToMany(type => Participation,participation => participation.meetingId)
    participations:Promise<Participation[]>

    @ManyToOne(type => MeetingRoom,room=>room.id)
    room:MeetingRoom
    
}