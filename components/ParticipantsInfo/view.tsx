export interface ParticipantsInfoViewProps {
  participants: {
    iconSrc: string;
  }[]
}

const ICON_SIZE = 32;

export const ParticipantsInfoView = ({
  participants
}: ParticipantsInfoViewProps) => {
  return (
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
