import Lnb from '../shared/Lnb';
import BigGnb from '../shared/BigGnb';
import FeedLayout from './components/FeedLayout';

const Explore = () => {
  return (
    <div>
      <section>
        <Lnb />
        <FeedLayout />
      </section>
      <BigGnb />
    </div>
  );
};

export default Explore;
