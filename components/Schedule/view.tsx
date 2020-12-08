import { RuleType } from "../../application/schedules/ruleType";
import { StagesInfoPresenterProps } from "../StagesInfo/presenter";

export interface ScheduleViewProps {
  rule: RuleType;
  firstStageId: number;
  secondStageId: number;

}

interface InnerProps extends ScheduleViewProps {
  renderRule: React.FC<RuleType>;
  renderStages: React.FC<StagesInfoPresenterProps>;
  renderParticipantsInfo: React.FC;
}

export const ScheduleView = ({
  rule,
  firstStageId,
  secondStageId,

  renderRule,
  renderStages,
  renderParticipantsInfo,
}: InnerProps) => {
  return (
    <div>
      {renderRule(rule)}
      {renderStages({firstStageId, secondStageId})}
      {renderParticipantsInfo({})}
    </div>
  );
}
