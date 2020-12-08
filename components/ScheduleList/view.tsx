import { ScheduleData } from '../../application/schedules/scheduleData';
import { UserData } from '../../application/users/userData';
import { ScheduleCardPresenterProps } from '../Schedule/presenter';

export interface ScheduleListViewProps {
  scheduleCardData: {
    schedule: ScheduleData,
    participants: UserData[],
  }[];
}

interface InnerProps extends ScheduleListViewProps {
  renderSchedule: React.FC<ScheduleCardPresenterProps>
}

export const ScheduleListView = ({
  scheduleCardData,
  renderSchedule,
}: InnerProps) => {
  return (
    <div>
      {scheduleCardData.map((scheduleDatum) => {
        return (
          renderSchedule({
            schedule: scheduleDatum.schedule,
            participants: scheduleDatum.participants
          })
        );
      })}
    </div>
  );
};
