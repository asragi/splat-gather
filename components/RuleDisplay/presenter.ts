import { Rule } from "../../domain/valueobjects/rule";
import { Presenter } from "../connect";
import { RuleDisplayViewProps } from "./view";

const RULE_TO_TEXT = {
  'splat_zones': 'ガチエリア',
  'clam_blitz': 'ガチアサリ',
  'rainmaker': 'ガチホコバトル',
  'tower_control': 'ガチヤグラ',
};

export const RuleDisplayPresenter: Presenter<{
  rule: Rule;
}, RuleDisplayViewProps> = ({ rule }) => {
  return {
    title: RULE_TO_TEXT[rule],
    ruleImgSrc: 'https://gyazo.com/927776100f941aa22e920e98bbe18441/thumb/1000',
    timeFrom: '12/16 09:00',
    timeTo: '12/16 11:00',
  }
};
