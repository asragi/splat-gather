export interface RuleDisplayViewProps {
  title: string,
}

export const RuleDisplayView = ({ title }: RuleDisplayViewProps) => {
  return(
    <div>{title}</div>
  );
};
