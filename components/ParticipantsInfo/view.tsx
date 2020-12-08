export interface ParticipantsInfoViewProps {
  participants: {
    iconSrc: string;
  }[]
}

export const ParticipantsInfoView = ({
  participants
}: ParticipantsInfoViewProps) => {
  return (
    <div>
      {participants.map((person) => {
        return (
          <img src={person.iconSrc} key={person.iconSrc} />
        );
      })}
    </div>
  );
};
