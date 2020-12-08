import { Rule } from "../../domain/valueobjects/rule";

export interface ScheduleData {
  scheduleId: string;
  rule: Rule;
  stageIds: number[];
  start: Date;
}
