import fs from 'fs';
import { Schedule } from "../../domain/entities/schedule";
import { IScheduleRepository } from "../../domain/repositories/scheduleRepository";
import { StageIds } from '../../domain/valueobjects/stageIds';

export class FakeScheduleRepository implements IScheduleRepository {
  fetchFutureAll() {
    const fileStr = fs.readFileSync(__dirname + '/fixture/schedule.json', 'utf8');
    const jsonObject = JSON.parse(fileStr);
    const schedules: Schedule[] = jsonObject.result.map((obj) => {
      return new Schedule({
        scheduleId: obj.start,
        rule: obj.rule_ex.key,
        start: new Date(obj.start),
        stageIds: new StageIds([
          Number(obj.maps_ex[0].id),
          Number(obj.maps_ex[1].id)]),
      });
    });
    return Promise.resolve(schedules);
  }
}
