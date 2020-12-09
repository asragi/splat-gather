import axios from 'axios';
import { Schedule } from "../../domain/entities/schedule";
import { IScheduleRepository } from "../../domain/repositories/scheduleRepository";
import { ScheduleId } from "../../domain/valueobjects/scheduleId";

const URL = 'https://spla2.yuu26.com/league/schedule';

export class ApiScheduleRepository implements IScheduleRepository {
  fetchFutureAll() {
    const options = {
      headers: {
        'User-Agent': 'Splat-gather (twitter @asRagi)'
      }
    }

    return axios.get(URL, options).then<Schedule[]>((body) => {
      return body.data['result'].map((s) => {
        return new Schedule ({
          scheduleId: new ScheduleId({ id: `league${s.start}`}),
          rule: s.rule_ex.key,
        });
      })
    });
  }
}
