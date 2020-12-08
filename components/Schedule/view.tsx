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
  const tilt = Math.random() * 6 - 3;
  return (
    <div className='schedule-card'>
      {renderRule(rule)}
      {renderStages({ firstStageId, secondStageId })}
      {renderParticipantsInfo({})}

      <style jsx>{`
        .schedule-card {
          display: flex;
          transform: rotate(${tilt}deg);
          padding: 12px 24px;
          border-radius: 8px;
          background: #212121;
          color: white;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
