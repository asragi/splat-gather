import { Schedule } from "../entities/schedule";

export interface IScheduleRepository {
  fetchFutureAll(): Schedule[];
}
