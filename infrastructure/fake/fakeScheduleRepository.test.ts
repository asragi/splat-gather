import { FakeScheduleRepository } from "./fakeScheduleRepository";

describe('infrastructure/fake/fakeScheduleRepository', () => {
  describe('FakeScheduleRepository', () => {
    it('fixtureデータを出力している', (done) => {
      const repository = new FakeScheduleRepository();
      const schedules = repository.fetchFutureAll();
      schedules.then((s) => {
        expect(s[0].rule).toBe('splat_zones');
        done();
      });
    });
  });
});
