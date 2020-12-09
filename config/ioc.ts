import Bottle from "bottlejs";

// Application Services
import { ScheduleApplicationService } from "../application/schedules/scheduleApplicationService";

// Infrastructures
import { FakeScheduleRepository } from '../infrastructure/fake/fakeScheduleRepository';
import { ApiScheduleRepository } from '../infrastructure/externalApi/apiScheduleRepository';

var bottle = new Bottle();

bottle.service('ScheduleRepository', ApiScheduleRepository);

bottle.factory('ScheduleApplicationService', (container) => {
  const scheduleRepository = container.ScheduleRepository;
  return new ScheduleApplicationService({ scheduleRepository });
});

export const ScheduleService: ScheduleApplicationService = bottle.container.ScheduleApplicationService;
