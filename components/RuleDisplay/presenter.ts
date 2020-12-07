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
    title: RULE_TO_TEXT[rule]
  }
};
