import React from 'react';
import EditModal from './components/EditModal';

const Mypage = () => {
  return (
  <div>
  <EditModal></EditModal>
  <div className='page'>
    <nav className='nav'>nav</nav>
    <div className='mypage'>    
      <header className='mypage__header'>
          <section className='mypage__background'></section>
          <section className='mypage__profile'>
            <div className='mypage__profile__photo'></div>
            <button className='mypage__edit'>
              <img src="edit.png"  alt="" />
            </button>
          </section>
          <section className='mypage__info'>
            <div className='mypage__info__header'>
              <h1 className='mypage__username'>leechi</h1>
              <span className='mypage__desc'>나는 최고다! </span>
            </div>
            <div className='mypage__info__footer'>
              <div className='mypage__info--post'>
                <span>6</span>
                <span>Posts</span>
              </div>
              <div className='mypage__info--follow'>
                <span>232</span>
                <span>Followers</span>
              </div>
              <div className='mypage__info--follower'>
                <span>828</span>
                <span>Following</span>
              </div>
            </div>
          </section>
        </header>
        <footer className='mypage__footer'>
        </footer>
      </div>
  </div>
  </div>
        )
};

export default Mypage;
