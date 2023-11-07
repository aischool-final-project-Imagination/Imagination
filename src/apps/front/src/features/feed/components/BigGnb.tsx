import { Link, useLocation } from 'react-router-dom';

const BigGnb = () => {
  const location = useLocation();
  // checkActive 함수는 경로를 인자로 받는다
  const checkActive = (path: string) => {
    return location.pathname === path
      ? 'BigGnb-hoverwhite active'
      : 'BigGnb-hoverwhite';
  };
  return (
    <div>
      <div className="BigGnb">
        <div className="BigGnb-main">
          <div className="BigGnb-imagination-icon">
            <img src="./img/Imagination.png" className="imagination"></img>
          </div>
          <div className="BigGnb-profile">
            <img
              src="https://i.namu.wiki/i/xl7WXBmp2VQ7mQRz53DlZ_7S1O4CEA_6RERhydKMTPYsdK9oXAcvqhtijh_rHQNw1fYt7skGA4vnMOJNg40jQA.webp"
              alt=""
              className="BigGnb-profile-img"
            ></img>
            <p>Leechi</p>
            <div className="profile-status">
              <div>
                <p>0</p>
                <p>게시물</p>
              </div>
              <div className="profile-status-middle">
                <p>0</p>
                <p>팔로우</p>
              </div>
              <div>
                <p>0</p>
                <p>팔로워</p>
              </div>
            </div>
          </div>
          <div className="BigGnb-btn">
            <Link to={'/feed'}>
              <div className={checkActive('/feed')}>
                <img src="./img/feed.png" className="BigGnb-icon" />
                <span>Feed</span>
              </div>
            </Link>
            <Link to={'/leader'}>
              <div className={checkActive('/leader')}>
                <img src="./img/rank.png" className="BigGnb-icon" />
                <span>Rank</span>
              </div>
            </Link>
            <Link to={'/explore'}>
              <div className={checkActive('/explore')}>
                <img src="./img/explore.png" className="BigGnb-icon" />
                <span>Explore</span>
              </div>
            </Link>
            <Link to={'/imagination'}>
              <div className={checkActive('/imagination')}>
                <img src="./img/ai.png" className="BigGnb-icon" />
                <span>AI</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="BigGnb-footer">
          <div className="Gnb-line"></div>
          <div
            className="BigGnb-hoverwhite Gnb-setting"
            style={{ paddingRight: 20 }}
          >
            <img src="./img/setting.png" className="BigGnb-icon" />
            <span>설정</span>
          </div>
          <div className="BigGnb-hoverwhite">
            <img src="./img/logout.png" className="BigGnb-icon" />
            <span>로그아웃</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigGnb;
