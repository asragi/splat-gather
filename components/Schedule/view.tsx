import { RuleType } from "../../application/schedules/ruleType";
import { UserData } from "../../application/users/userData";
import { StagesInfoPresenterProps } from "../StagesInfo/presenter";
import { stripe } from "../color";

export interface ScheduleViewProps {
  rule: RuleType;
  firstStageId: number;
  secondStageId: number;
  participants: UserData[];
  colorA: string;
  colorB: string;
  tilt: number;
}

interface InnerProps extends ScheduleViewProps {
  renderRule: React.FC<RuleType>;
  renderStages: React.FC<StagesInfoPresenterProps>;
  renderParticipantsInfo: React.FC<UserData[]>;
}


export const ScheduleView = ({
  rule,
  firstStageId,
  secondStageId,
  participants,
  colorA,
  colorB,
  tilt,

  renderRule,
  renderStages,
  renderParticipantsInfo,
}: InnerProps) => {
  return (
    <div className='schedule-card'>
      {renderRule(rule)}
      {renderStages({ firstStageId, secondStageId })}
      {renderParticipantsInfo(participants)}

      <style jsx>{`
        .schedule-card {
          display: flex;
          transform: rotate(${tilt}deg);
          padding: 12px 24px;
          border-radius: 8px;
          color: white;
          text-shadow: 2px 1px 1px black;
          font-weight: bold;
          margin-bottom: 32px;
          ${stripe(colorA, colorB)}
        }
      `}</style>
    </div>
  );
}
