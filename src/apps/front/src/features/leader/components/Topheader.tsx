//Topheader.tsx
import { useState, MouseEvent } from 'react';
import Toptail from './Toptail';
import { Leaderboard, LeaderboardEntry } from './Database'; // Directly importing Leaderboard

interface BetweenFunction {
  (data: LeaderboardEntry[], period: number): LeaderboardEntry[];
}

export default function Topheader() {
  const [period, setPeriod] = useState<number>(0);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const periodValue = e.currentTarget.getAttribute('data-id');
    if (periodValue) {
      setPeriod(Number(periodValue));
    }
  };

  return (
    <div className="Topheader">
      <h1 className="leaderboard">Leaderboard of the Week</h1>
      <div className="duration">
        <button onClick={handleClick} data-id="7">
          7 Days
        </button>
        {/* <button onClick={handleClick} data-id='30'>30 Days</button> */}
        <button onClick={handleClick} data-id="0">
          All-Time
        </button>
      </div>
      <Toptail Leaderboard={between(Leaderboard, period)} />
    </div>
  );
}

const between: BetweenFunction = (data, period) => {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (period + 1));

  const filter = data.filter((val) => {
    const userDate = new Date(val.dt);
    if (period === 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with ascending order
  return filter.sort((a, b) => b.score - a.score);
};
