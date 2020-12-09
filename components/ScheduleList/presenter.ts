import { fetchSchedules } from "../../hooks/fetchSchedules";
import { Presenter } from "../connect";
import { ScheduleListViewProps } from "./view";

export interface ScheduleListPresenterProps { }

export const ScheduleListPresenter: Presenter<ScheduleListPresenterProps, ScheduleListViewProps> = ({
}: ScheduleListPresenterProps) => {
  const schedules = fetchSchedules();
  const cardData = schedules.map((schedule) => {
    return {
      schedule,
      participants: []
    };
  });
  return { scheduleCardData: cardData };
}
