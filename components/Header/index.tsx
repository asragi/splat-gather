import { stripe, lightLeague, league } from "../color";

export const Header = () => {
  return (
    <div className='header'>
      <div>
        スプラト☆ギャザー
      </div>
      <style>{`
        .header {
          padding: 16px 32px;
          color: white;
          font-weight: bold;
          ${stripe(league, lightLeague)}
        }
      `}</style>
    </div>)
    ;
};
