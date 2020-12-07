import { FakeScheduleRepository } from "./fakeScheduleRepository";

describe('infrastructure/fake/fakeScheduleRepository', () => {
  describe('FakeScheduleRepository', () => {
    it('fixtureデータを出力している', () => {
      const repository = new FakeScheduleRepository();
      const schedules = repository.fetchFutureAll();
      expect(schedules[0].rule).toBe('splat_zones');
    });
  });
});
