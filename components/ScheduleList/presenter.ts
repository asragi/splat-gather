import { ScheduleData } from "../../application/schedules/scheduleData";
import { Presenter } from "../connect";
import { ScheduleListViewProps } from "./view";

export interface ScheduleListPresenterProps {
  schedules: ScheduleData[],
}

export const ScheduleListPresenter: Presenter<ScheduleListPresenterProps, ScheduleListViewProps> = ({
  schedules
}: ScheduleListPresenterProps) => {
  const cardData = schedules.map((schedule) => {
    return {
      schedule,
      participants: []
    };
  });
  return { scheduleCardData: cardData };
}
