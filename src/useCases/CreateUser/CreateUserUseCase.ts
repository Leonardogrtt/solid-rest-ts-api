import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";

export class CreateUserUseCase {
     // -1- private usersRepository: IUsersRepository
     constructor(
          // -2- userRepository: IUsersRepository
          // 1 2 3!

          // so(L)id - LISKOV SUBSTITUTION PRINCIPLE
          private userRepository: IUsersRepository


     ) {/* -3- this.userRepository = usersRepository */}

     // (S)olid - SINGLE RESPONSABILITY PRINCIPLE
     // soli(D) - DEPENDENCY INVERTION PRINCIPLE
     async execute(data: ICreateUserRequestDTO) {
         const userAlreadyExists = await this.userRepository.findByEmail(data.email);

          if(userAlreadyExists) {
               throw new Error('User already exists.');
          }
          const user = new User(data);

          await this.userRepository.save(user);
     }


}