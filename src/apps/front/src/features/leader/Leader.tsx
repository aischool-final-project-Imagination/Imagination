import Topheader from './components/Topheader';
import Topthree from './components/Topthree';
// import Topten from './components/Topten';
import Toptail from './components/Toptail';
import './components/_topheader.scss';
import './components/_topthree.scss';
// import './components/_topten.scss';
import './components/_toptail.scss';

const Leader: React.FC = () => {
  return (
    <div className="Leader">
      <Topheader /> {/* Removed Leaderboard prop */}
      <Topthree /> {/* Removed Leaderboard prop */}
      {/* <Topten /> */}
      <Toptail /> {/* Removed Leaderboard prop */}
    </div>
  );
};

export default Leader;
