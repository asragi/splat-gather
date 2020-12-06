import { User } from "../entities/user";
import { IUserRepository } from "../repositories/userRepository";

type UserServiceProps = {
  userRepository: IUserRepository;
}

export class UserService {
  userRepository: IUserRepository;

  constructor(props: UserServiceProps) {
    Object.assign(this, props);
  }

  exists(user: User): boolean {
    const duplicatedUser = this.userRepository.find(user.id);
    return duplicatedUser != null;
  }
}
