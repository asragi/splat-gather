export interface StagesInfoViewProps {
  firstStageName: string;
  secondStageName: string;
}

export const StagesInfoView = ({
  firstStageName,
  secondStageName,
}: StagesInfoViewProps) => {
  return (
    <div>
      <div>{firstStageName}</div>
      <div>{secondStageName}</div>
    </div>
  );
};
