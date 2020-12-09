import request from "request-promise";
import { Schedule } from "../../domain/entities/schedule";
import { IScheduleRepository } from "../../domain/repositories/scheduleRepository";
import { ScheduleId } from "../../domain/valueobjects/scheduleId";

const URL = 'https://spla2.yuu26.com/league/schedule';

export class ApiScheduleRepository implements IScheduleRepository {
  fetchFutureAll() {
    const options: request.RequestPromiseOptions = {
      headers: {
        'User-Agent': 'Splat-gather (twitter @asRagi)'
      }
    }

    let schedules = [];
    /*
    request(URL, options).then((body) => {
        const jsonObject = JSON.parse(body);
        schedules = jsonObject.result.map((obj) => {
          return new Schedule({
            scheduleId: new ScheduleId({ id: `league${obj.start}` }),
            rule: obj.rule_ex.key,
          });
        });
    }).catch((err) => {

    });
    */

    return schedules;
  }
}
