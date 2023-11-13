// Toptail.tsx
// import Topthree from './Topthree';

interface LeaderboardEntry {
  img: string;
  name: string;
  grade: string;
  score: number;
}

interface ToptailProps {
  Leaderboard?: LeaderboardEntry[]; // Make Leaderboard optional
}

const defaultLeaderboard: LeaderboardEntry[] = [
  // Example default data
  // { img: "path_to_image", name: "John Doe", grade: "A", score: 95 },
  // { img: "path_to_image", name: "Jane Smith", grade: "A", score: 93 },
  // ... more entries
];

export default function Toptail({
  Leaderboard = defaultLeaderboard,
}: ToptailProps) {
  return (
    <div className="Toptail">
      {Leaderboard.map((value, index) => (
        <div className="flex" key={index}>
          <div className="item">
            <img src={value.img} alt={value.name} />
            <div className="info">
              <h3 className="name text-dark">{value.name}</h3>
              <span>{value.grade}</span>
            </div>
          </div>
          <div className="item">
            <span>{value.score}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
