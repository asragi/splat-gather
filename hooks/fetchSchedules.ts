import { useEffect, useState } from "react";
import { ScheduleService } from "../config/ioc";

export const fetchSchedules = () => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    ScheduleService.fetchAll().then((scheduleData) => {
      setSchedules(scheduleData);
    });
  }, []);

  return schedules;
};
