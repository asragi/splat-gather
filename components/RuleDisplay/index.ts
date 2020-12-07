import { connect } from "../connect";
import { RuleDisplayPresenter } from "./presenter";
import { RuleDisplayView } from "./view";

export const RuleDisplay = connect(RuleDisplayPresenter, RuleDisplayView);
