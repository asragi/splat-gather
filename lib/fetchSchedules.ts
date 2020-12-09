import { ScheduleService } from "../config/ioc";

export const fetchSchedules = () => {
  return ScheduleService.fetchAll();
};
