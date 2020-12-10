import { UserData } from '../../application/users/userData';

export interface ParticipantsInfoViewProps {
  participants: UserData[],
  buttonOnClick: () => void,
  buttonText: string,
}

interface InnerProps extends ParticipantsInfoViewProps {
  renderJoinButton: React.FC<{ onClick: () => void, text: string }>;
}

const ICON_SIZE = 32;

export const ParticipantsInfoView = ({
  participants,
  buttonOnClick,
  buttonText,

  renderJoinButton,
}: InnerProps) => {
  return (
    <div className='participants-info-container'>
      <div className='participants-info'>
        {participants.map((person) => {
          return (
            <img
              src={person.iconSrc}
              key={person.iconSrc}
              className='participants-icon'
            />
          );
        })}
      </div>
      <div className='button-container'>
        {
          renderJoinButton({
            onClick: buttonOnClick,
            text: buttonText
          })}
      </div>

      <style jsx>{`
        .participants-info {
          display: flex;
          align-items: center;
          margin-left: 32px;
          width: 200px;
        }

        .participants-icon {
          width: ${ICON_SIZE}px;
        }
      `}</style>
    </div>
  );
};
