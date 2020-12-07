import { Rule } from '../valueobjects/rule';
import { ScheduleId } from '../valueobjects/scheduleId';

type ScheduleProps = {
  scheduleId: ScheduleId;
  rule: Rule;
}

export class Schedule {
  scheduleId: ScheduleId;
  rule: Rule;

  constructor(props: ScheduleProps) {
    Object.assign(this, props);
  }
}
