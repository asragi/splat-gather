import { ScheduleData } from "../../application/schedules/scheduleData";
import { UserData } from "../../application/users/userData";
import { Rule } from "../../domain/valueobjects/rule";
import { connect } from "../connect";
import { ParticipantsInfo } from "../ParticipantsInfo";
import { RuleDisplay } from "../RuleDisplay";
import { StagesInfo } from "../StagesInfo";
import { StagesInfoPresenterProps } from "../StagesInfo/presenter";
import { ScheduleCardPresenter } from "./presenter";

import { ScheduleView as _ScheduleView, ScheduleViewProps } from "./view";

const renderParticipantsInfo = (participants: UserData[]) => <ParticipantsInfo participants={participants}/>;

const renderRule = ({ rule, start }: { rule: Rule, start: Date }) => <RuleDisplay rule={rule} start={start} />
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
