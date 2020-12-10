import { ScheduleData } from "./scheduleData";
import { IScheduleRepository } from "../../domain/repositories/scheduleRepository";

type ScheduleApplicationServiceProps = {
  scheduleRepository: IScheduleRepository;
};

export class ScheduleApplicationService {
  scheduleRepository: IScheduleRepository;

  constructor(props: ScheduleApplicationServiceProps) {
    Object.assign(this, props);
  }

  fetchAll(): Promise<ScheduleData[]> {
    const schedules = this.scheduleRepository.fetchFutureAll();
    return schedules.then((scheduleSet) => {
      return scheduleSet.map((schedule) => {
      return {
        scheduleId: schedule.scheduleId.id,
        rule: schedule.rule,
        start: schedule.start,
        stageIds: schedule.stageIds.stageIds,
      }});
    });
  }
}
