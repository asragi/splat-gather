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
        .participants-info-container {
          display: flex;
          flex-direction: column;
          margin-left: 32px;
        }

        .participants-info {
          display: flex;
          align-items: center;
          width: 200px;
          flex-grow: 1;
        }

        .participants-icon {
          width: ${ICON_SIZE}px;
        }

        .button-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
