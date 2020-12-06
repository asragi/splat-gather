import { User } from "../entities/user";
import { UserId } from "../valueobjects/userId";
import { UserService } from "./userService";

describe('domain/services/userService', () => {
  describe('UserService', () => {
    it('test exists', () => {
      const id = new UserId({ id: 'testId' });
      const user = new User({ id });
      const userRepository = {
        save: () => {},
        delete: () => {},
        find: () => { return null; }
      };

      const userService = new UserService({ userRepository });
      expect(userService.exists(user)).toBeFalsy();      

      userRepository.find = () => { return user; }
      expect(userService.exists(user)).toBeTruthy();      
    });
  });
});
