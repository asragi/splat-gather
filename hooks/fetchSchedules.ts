import { useState } from "react";
import { ScheduleService } from "../config/ioc";

export const fetchSchedules = () => {
  const [schedules, setSchedules] = useState([]);
  ScheduleService.fetchAll().then((scheduleData) => {
    setSchedules(scheduleData);
  });

  return schedules;
};
