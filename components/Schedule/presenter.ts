import { Presenter } from "../connect";
import { ScheduleViewProps } from "./view";

export const ScheduleCardPresenter: Presenter<{
  
}, ScheduleViewProps> = ({

}) => {
  return {
    rule: 'clam_blitz',
    firstStageId: 3,
    secondStageId: 5
  };
};
