export interface StagesInfoViewProps {
  firstStageName: string;
  secondStageName: string;
}

export const StagesInfoView = ({
  firstStageName,
  secondStageName,
}: StagesInfoViewProps) => {
  return (
    <div className='stages-info'>
      <div className='stage-name'>{firstStageName}</div>
      <div className='stage-name'>{secondStageName}</div>

      <style jsx>{`
        .stages-info {
          display:flex;
          flex-direction: column;
          margin-left: 32px;
        }

        .stage-name {
          display: flex;
          flex-grow: 1;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
