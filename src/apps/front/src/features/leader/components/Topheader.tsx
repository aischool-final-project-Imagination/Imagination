//Topheader.tsx
import { useAtom } from 'jotai';
import { periodAtom } from './Atoms';
import { FunctionComponent } from 'react';

const Topheader: FunctionComponent = () => {
  const [, setPeriod] = useAtom(periodAtom);

  const handleWeekendClick = () => {
    setPeriod(7);
  };
  const handleAllTimeClick = () => {
    setPeriod(0);
  };

  return (
    <div className="Topheader">
      <h1 className="leaderboard">Leaderboard of the Week</h1>
      <div className="duration">
        <button onClick={handleWeekendClick}>7 Days</button>
        <button onClick={handleAllTimeClick}>All-Time</button>
      </div>
    </div>
  );
};

export default Topheader;
