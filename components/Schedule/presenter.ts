import { ScheduleData } from "../../application/schedules/scheduleData";
import { UserData } from "../../application/users/userData";
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
  return {
    rule: schedule.rule,
    firstStageId: schedule.stageIds[0],
    secondStageId: schedule.stageIds[1],
    participants
  };
};
