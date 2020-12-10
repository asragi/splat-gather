import { Rule } from '../valueobjects/rule';
import { ScheduleId } from '../valueobjects/scheduleId';
import { StageIds } from '../valueobjects/stageIds';

type ScheduleProps = {
  scheduleId: ScheduleId;
  rule: Rule;
  stageIds: StageIds;
  start: Date;
}

export class Schedule {
  scheduleId: ScheduleId;
  rule: Rule;
  stageIds: StageIds;
  start: Date;

  constructor(props: ScheduleProps) {
    Object.assign(this, props);
  }
}
