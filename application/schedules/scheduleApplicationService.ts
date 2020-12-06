import { Schedule } from "../../domain/entities/schedule";
import { IScheduleRepository } from "../../domain/repositories/scheduleRepository";

type ScheduleApplicationServiceProps = {
  scheduleRepository: IScheduleRepository;
};

export class ScheduleApplicationService {
  scheduleRepository: IScheduleRepository;

  constructor(props: ScheduleApplicationServiceProps) {
    Object.assign(this, props);
  }

  fetchAll(): Schedule[] {
    return this.scheduleRepository.FetchFutureAll();
  }
}
