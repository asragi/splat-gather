import { Presenter } from "../connect";
import { ScheduleListViewProps } from "./view";

export interface ScheduleListPresenterProps {

}

export const ScheduleListPresenter: Presenter<ScheduleListPresenterProps, ScheduleListViewProps> = ({

}: ScheduleListPresenterProps) => {
  return {
    scheduleCardData: [
      {schedule: {scheduleId: 'id', stageIds: [2, 5], start: new Date('2020/12/16 09:00:00'), rule: 'rainmaker'}, participants: []},
      {schedule: {scheduleId: 'id', stageIds: [4, 9], start: new Date('2020/12/16 11:00:00'), rule: 'splat_zones'}, participants: []},
    ]
  };
}
