// Topthree.tsx
import { Leaderboard } from './Database'; // Directly importing Leaderboard

export default function Topthree() {
  // Check if Leaderboard has at least three items
  if (Leaderboard.length < 3) {
    // Render a user-friendly message instead of null
    return <div>No Image</div>;
  }

  return (
    <div className="Topthree">
      {Leaderboard.slice(0, 3).map((entry, index) => (
        <div className="card" key={index}>
          <div className="top-three-blue-box-size">{index + 1}</div>
          <img
            className="top-three-img-size"
            src={entry.img}
            alt={`Leader ${index + 1}`}
          />
          <div className="name">{entry.name}</div>
          <div className="grade">{entry.grade}</div>
          <div className="score">{entry.score}</div>
        </div>
      ))}
    </div>
  );
}
