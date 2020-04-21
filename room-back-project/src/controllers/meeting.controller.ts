import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { MeetingService } from "./meeting.service";
import { MeetingRoomService } from "./meetingRoom.service";





@Controller('meetings')
export class MeetingController{

    constructor(   private readonly meetingServie: MeetingService,
        private readonly meetingRoomService: MeetingRoomService,
        ){

    }



   @Get()
   findAll(){
       return this.meetingServie.getMeetings();
   }

   @Get(':id')
   findById(@Param('id') id:number){
       return this.meetingServie.getById(id);

   }

   @Get(':id/meetings')
   getMeetings(@Param('id') id:number){
       return this.meetingServie.getByRoomId({where: {roomId:id}});

   }

   @Post()
   createMeeting(@Body() meeting){
       console.log(meeting);
        return this.meetingServie.addMeeting(meeting);
   }


   @Put(':id')
    editMeeting(@Param('id') id: number, @Body() data) {
        //console.log(data);
        return this.meetingServie.updateMeeting(id, data);
       
    }

    @Delete(':id')
    removeMeeting(@Param('id') id: number) {
        return this.meetingServie.deleteMeeting(id); 
    }


    @Get(':id/rooms')
    getRooms(@Param('id') id) {
       return this.meetingRoomService.getById(id);
       //return  createQueryBuilder("meetings").innerJoin()
    }
}