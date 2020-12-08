import { Rule } from "../../domain/valueobjects/rule";
import { connect } from "../connect";
import { ParticipantsInfo } from "../ParticipantsInfo";
import { RuleDisplay } from "../RuleDisplay";
import { StagesInfo } from "../StagesInfo";
import { StagesInfoPresenterProps } from "../StagesInfo/presenter";
import { ScheduleCardPresenter } from "./presenter";

import { ScheduleView as _ScheduleView, ScheduleViewProps } from "./view";

const renderParticipantsInfo = ({ }) => <ParticipantsInfo />;
const renderRule = (rule: Rule) => <RuleDisplay rule={rule} />
const renderStages = ({firstStageId, secondStageId}: StagesInfoPresenterProps) => <StagesInfo
  firstStageId={firstStageId}
  secondStageId={secondStageId}
/>;

const ScheduleView = (props: ScheduleViewProps) => <_ScheduleView
  {...props}
  renderRule={renderRule}
  renderStages={renderStages}
  renderParticipantsInfo={renderParticipantsInfo}
/>

export const ScheduleCard = connect(ScheduleCardPresenter, ScheduleView);
