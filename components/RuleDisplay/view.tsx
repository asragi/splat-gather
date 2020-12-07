export interface RuleDisplayViewProps {
  title: string,
  ruleImgSrc: string,
  timeFrom: string,
  timeTo: string,
}

export const RuleDisplayView = ({ 
  title,
  ruleImgSrc,
  timeFrom,
  timeTo,
}: RuleDisplayViewProps) => {
  return (
    <div >
      <div><img src={ruleImgSrc}/></div>
      <div>
        <div>
          <time>{timeFrom}</time> - <time>{timeTo}</time>
        </div>
        <div>{title}</div>
      </div>
    </div>
  );
};
