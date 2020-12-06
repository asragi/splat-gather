import { User } from "../entities/user";
import { UserId } from "../valueobjects/userId";

export interface IUserRepository {
  find(userId: UserId): User | null;
  save(user: User): void;
  delete(userId: UserId): void;
}
