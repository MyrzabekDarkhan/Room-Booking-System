import { Controller, Get, Param, Post, Body, Put, Delete, UsePipes, ValidationPipe } from "@nestjs/common";
import {UserService} from "./user.service";




@Controller('users')
export class UserController{

    constructor(   private readonly userService: UserService,
    
        ){

    }



   @Get()
   findAll(){
       return this.userService.getUsers();
   }

   @Get(':id')
   findById(@Param('id') id:number){
       return this.userService.getById(id);

   }

   @Post()
   createUser(@Body() user){
       console.log(user);
        return this.userService.createUser(user);
        
   }


   @Put(':id')
    editUser(@Param('id') id: number, @Body() data) {
        return this.userService.updateUser(id, data);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id); 
    }

    @Post('auth')
    auth(@Body() data){
        return this.userService.getOne({where: {name:data.name ,password:data.password}});
    }


}