import { ScheduleId } from '../valueobjects/scheduleId';
import { UserId } from '../valueobjects/userId';

export type ReserveProps = {
  ownerId: UserId;
  scheduleId: ScheduleId;
}

export class Reservation {
  ownerId: UserId;
  scheduleId: ScheduleId;

  constructor(props: ReserveProps) {
    Object.assign(this, props);
  }
}
