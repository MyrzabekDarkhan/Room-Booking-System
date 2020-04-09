import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";


@Entity({name:'participations'})
export class Participation{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    userId:number;

    @Column()
    meetingId:number

    @ManyToOne(type=>User,user=>user.id)
    user:User;


}