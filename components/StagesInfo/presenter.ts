import { Presenter } from "../connect";
import { StagesInfoViewProps } from "./view";

const ID2NAME = {
  0: 'バッテラストリート',
  1: 'フジツボスポーツクラブ',
  2: 'ガンガゼ野外音楽堂',
  3: 'チョウザメ造船',
  4: '海女美術大学',
  5: 'コンブトラック',
  6: 'マンタマリア号',
  7: 'ホッケふ頭',
  8: 'タチウオパーキング',
  9: 'エンガワ河川敷',
  10:	'モズク農園',
  11:	'Ｂバスパーク',
  12:	'デボン海洋博物館',
  13:	'ザトウマーケット',
  14:	'ハコフグ倉庫',
  15:	'アロワナモール',
  16:	'モンガラキャンプ場',
  17:	'ショッツル鉱山',
  18:	'アジフライスタジアム',
  19:	'ホテルニューオートロ',
  20:	'スメーシーワールド',
  21:	'アンチョビットゲームズ',
  22:	'ムツゴ楼',
};

export interface StagesInfoPresenterProps {
  firstStageId: number,
  secondStageId: number,
}

export const StagesInfoPresenter: Presenter<StagesInfoPresenterProps, StagesInfoViewProps> = ({
  firstStageId,
  secondStageId,
}) => {
  return {
    firstStageName: ID2NAME[firstStageId],
    secondStageName: ID2NAME[secondStageId],
  };
};
