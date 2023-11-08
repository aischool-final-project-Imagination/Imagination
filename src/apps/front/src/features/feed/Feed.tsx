import { useState } from 'react';
import Lnb from './components/Lnb';
import BigGnb from './components/BigGnb';
import Post from './components/Post';
import Alertpop from './components/Alertpop';

const Feed = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <div>
      <main>
        <Lnb />
        <Post onImageClick={handleOpenAlert} />
      </main>
      <BigGnb />
      <Alertpop isOpen={isAlertOpen} onClose={handleCloseAlert} />
    </div>
  );
};

export default Feed;
