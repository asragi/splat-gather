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
    <div className='rule-display-container'>
      <div className='img-container'><img src={ruleImgSrc} /></div>
      <div className='display-container'>
        <div className='time-display'>
          <time>{timeFrom}</time>
          <div className='separater'>-</div>
          <time>{timeTo}</time>
        </div>
        <div className='title-display'>{title}</div>
      </div>

      <style jsx>{`
        .rule-display-container {
          display: flex;
        }

        .img-container {
          width: 80px;
          height: 80px;
        }

        .img-container img {
          width: 100%;
        }

        .display-container {
          display: flex;
          flex-direction: column;
          margin: 0 32px;
        }

        .time-display {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
        }

        .separater {
          margin: 0 4px;
        }

        .title-display {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
          font-size: x-large;
        }
      `}</style>
    </div>
  );
};
