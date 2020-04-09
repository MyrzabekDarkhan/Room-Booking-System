import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User";
import { Meeting } from "./Meeting";


@Entity({name:'meetingrooms'})
export class MeetingRoom{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    capacity:number;

    @OneToMany(type => Meeting , meeting=>meeting.id)
    user:Promise<User[]>;
}