import axios from 'axios';
import { Schedule } from "../../domain/entities/schedule";
import { IScheduleRepository } from "../../domain/repositories/scheduleRepository";
import { ScheduleId } from "../../domain/valueobjects/scheduleId";
import { StageIds } from '../../domain/valueobjects/stageIds';

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
          start: new Date(s.start),
          stageIds: new StageIds([
            Number(s.maps_ex[0].id),
            Number(s.maps_ex[1].id),
          ]),
        });
      })
    });
  }
}
