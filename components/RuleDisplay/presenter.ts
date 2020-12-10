import { Rule } from "../../domain/valueobjects/rule";
import { Presenter } from "../connect";
import { RuleDisplayViewProps } from "./view";

const RULE_TO_TEXT = {
  'splat_zones': 'ガチエリア',
  'clam_blitz': 'ガチアサリ',
  'rainmaker': 'ガチホコバトル',
  'tower_control': 'ガチヤグラ',
};

const date2string = (date: Date, offsetHour: number): string => {
  return `${1 + date.getMonth()}/${date.getDay()} ${(date.getHours() + offsetHour) % 24}:00`;
};

export const RuleDisplayPresenter: Presenter<{
  rule: Rule;
  start: Date;
}, RuleDisplayViewProps> = ({ rule, start }) => {
  return {
    title: RULE_TO_TEXT[rule],
    ruleImgSrc: 'https://gyazo.com/927776100f941aa22e920e98bbe18441/thumb/1000',
    timeFrom: date2string(start, 0),
    timeTo: date2string(start, 2),
  }
};
