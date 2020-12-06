// domain
import { IUserRepository } from "../../domain/repositories/userRepository";
import { UserId } from '../../domain/valueobjects/userId';
import { UserService } from '../../domain/services/userService';

import { UserCreateCommand } from "./userCreateCommand";
import { User } from "../../domain/entities/user";

export type UserApplicationServiceProps = {
  userRepository: IUserRepository;
  userService: UserService;
};

export class UserApplicationService {
  userRepository: IUserRepository;
  userService: UserService;

  constructor(props: UserApplicationServiceProps) {
    Object.assign(this, props);
  }

  create(command: UserCreateCommand) {
    const userId = new UserId({ id: command.userId });
    const user = new User({ id: userId });

    if(this.userService.exists(user)) {
      throw 'User already exists!';
    }

    this.userRepository.save(user);
  }
}
