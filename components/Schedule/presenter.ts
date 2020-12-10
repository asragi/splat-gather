import { ScheduleData } from "../../application/schedules/scheduleData";
import { UserData } from "../../application/users/userData";
import { colorByRule } from "../color";
import { Presenter } from "../connect";
import { ScheduleViewProps } from "./view";

export interface ScheduleCardPresenterProps {
  schedule: ScheduleData;
  participants: UserData[]
}

export const ScheduleCardPresenter: Presenter<ScheduleCardPresenterProps, ScheduleViewProps> = ({
  schedule,
  participants
}) => {
  const { rule, start } = schedule;
  const tilt = Math.random() * 6 - 3;
  const { colorA, colorB } = colorByRule(rule);
  return {
    rule,
    firstStageId: schedule.stageIds[0],
    secondStageId: schedule.stageIds[1],
    participants,
    tilt,
    colorA,
    colorB,
    start
  };
};
