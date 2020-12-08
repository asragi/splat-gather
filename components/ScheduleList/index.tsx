import { connect } from "../connect";
import { ScheduleListPresenter } from "./presenter";
import { ScheduleListView as _ScheduleListView } from "./view";
import { ScheduleListViewProps } from './view';
import { ScheduleCard } from '../Schedule';
import { ScheduleCardPresenterProps } from '../Schedule/presenter';

const renderSchedule = ({
  schedule,
  participants, 
}: ScheduleCardPresenterProps) => <ScheduleCard participants={participants} schedule={schedule}/>;
const ScheduleListView = (props: ScheduleListViewProps) => <_ScheduleListView {...props} renderSchedule={renderSchedule}/>;
export const ScheduleList = connect(ScheduleListPresenter, ScheduleListView);
