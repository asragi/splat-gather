export type ScheduleIdProps = {
  id: string;
}

export class ScheduleId {
  id: string;

  constructor(props: ScheduleIdProps) {
    Object.assign(this, props);
  }
}
