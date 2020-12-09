import { Schedule } from "../entities/schedule";

export interface IScheduleRepository {
  fetchFutureAll(): Promise<Schedule[]>;
}
