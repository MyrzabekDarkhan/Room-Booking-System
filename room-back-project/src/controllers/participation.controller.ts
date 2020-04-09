import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { ParticipationService } from "./participation.service";




@Controller('participations')
export class ParticipationController{

    constructor(   private readonly participationService: ParticipationService,
        //private readonly questionnairiesService: QuestionnaireService,
        ){

    }



   @Get()
   findAll(){
       return this.participationService.getParticipants();
   }

   @Get(':id')
   findById(@Param('id') id:number){
       return this.participationService.getById(id);

   }

   @Post()
   createParticipant(@Body() participant){
        return this.participationService.createParticipant(participant);
   }


   @Put(':id')
    editParticipant(@Param('id') id: number, @Body() data) {
        return this.participationService.updateParticipant(id, data);
    }

    @Delete(':id')
    deleteParticipant(@Param('id') id: number) {
        return this.participationService.deleteParticipant(id); 
    }
}