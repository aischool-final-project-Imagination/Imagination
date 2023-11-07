import { Link } from 'react-router-dom';

const Lnb = () => {
  return (
    <div className="Lnb">
      <form action="" className="Lnb-form">
        <input type="text" className="Lnb-search-input" />
      </form>
      <div className='Lnb-right'>
        <button className="Lnb-create-btn">
          <Link to={'/create'}>
            <span className="Lnb-create-btn-plus">+</span>Create
          </Link>
        </button>
        <div className="Lnb-allim">
          <img src="./img/alarm.png" alt="" className="Lnb-alarm" />
          <img src="./img/share.png" alt="" className="Lnb-chat" />
        </div>
      </div>
    </div>
  );
};

export default Lnb;
