import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { MeetingRoomService } from "./meetingRoom.service";




@Controller('rooms')
export class MeetingRoomController{

    constructor(   private readonly meetingroomService: MeetingRoomService,
        //private readonly questionnairiesService: QuestionnaireService,
        ){

    }



   @Get()
   findAll(){
       return this.meetingroomService.getRooms();
   }

   @Get(':id')
   findById(@Param('id') id:number){
       return this.meetingroomService.getById(id);

   }

   @Post()
   createRoom(@Body() room){
        return this.meetingroomService.createRoom(room);
   }


   @Put(':id')
    editRoom(@Param('id') id: number, @Body() data) {
        return this.meetingroomService.updateRoom(id, data);
    }

    @Delete(':id')
    deleteRoom(@Param('id') id: number) {
        return this.meetingroomService.deleteRoom(id); 
    }
}