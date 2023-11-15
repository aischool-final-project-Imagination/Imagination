import useMypage from '../hooks/useMypage';

const MypageInfo = ({ open }) => {
  const { imageSrc, profileImageSrc } = useMypage();
  return (
    <div>
      <header className="mypage-header">
        <img src={imageSrc} className="mypage-background"></img>
        <section className="mypage-profile">
          <img src={profileImageSrc} className="mypage-profile-photo"></img>
          <button className="mypage-edit" onClick={open}>
            <img src="mypage/edit.png" alt="" />
          </button>
        </section>
        <section className="mypage-info">
          <div className="mypage-info-header">
            <h1 className="mypage-username">leechi</h1>
            <span className="mypage-desc">나는 최고다! </span>
          </div>
          <div className="mypage-info-footer">
            <div className="mypage-info-post">
              <span>6</span>
              <span>Posts</span>
            </div>
            <div className="mypage-info-follow">
              <span>232</span>
              <span>Followers</span>
            </div>
            <div className="mypage-info-follower">
              <span>828</span>
              <span>Following</span>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default MypageInfo;