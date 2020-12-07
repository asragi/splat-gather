import fs from 'fs';
import { Schedule } from "../../domain/entities/schedule";
import { IScheduleRepository } from "../../domain/repositories/scheduleRepository";

export class FakeScheduleRepository implements IScheduleRepository {
  fetchFutureAll(): Schedule[] {
    const fileStr = fs.readFileSync(__dirname + '/fixture/schedule.json', 'utf8');
    const jsonObject = JSON.parse(fileStr);
    return jsonObject.result.map((obj) => {
      return new Schedule({
        scheduleId: obj.start,
        rule: obj.rule_ex.key,
      });
    });
  }
}
