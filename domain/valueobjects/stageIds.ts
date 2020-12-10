export class StageIds {
  stageIds: number[];

  constructor(stageIds: number[]) {
    if (stageIds.length !== 2) {
      throw 'two stage ids are required.';
    }
    this.stageIds = stageIds;
  }
}
