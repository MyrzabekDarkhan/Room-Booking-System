import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/models/User";


@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

        
        getUsers(){
            return this.userRepository.find();
        }

        getById(id:number){
            return this.userRepository.findOne(id);
        }

        createUser(user:User){
            return this.userRepository.save(user);
        }

        updateUser(id: number, data: Partial<User>) {
            return this.userRepository.update(id, data);
        }
    
        deleteUser(id: number) {
            return this.userRepository.delete(id);
        }




}