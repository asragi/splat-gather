import { UserService } from '../../domain/services/userService';
import { UserApplicationService } from './userApplicationService';

// jest.mock('../../domain/services/userService');

describe('application/users/userApplicationService', () => {
  describe('UserApplicationService', () => {
    it('test create', () => {
      const userIdString = 'testId';
      const saveFunc = jest.fn(() => { });
      const userRepository = {
        save: saveFunc,
        delete: () => {},
        find: () => { return null; }
      };
      const userService = new UserService({ userRepository });
      const service = new UserApplicationService({
        userRepository,
        userService
      });

      service.create({ userId: userIdString });

      expect(saveFunc).toBeCalledTimes(1);
    });
  });
});
