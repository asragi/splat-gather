import { Schedule } from "../entities/schedule";

export interface IScheduleRepository {
  FetchFutureAll(): Schedule[];
}
