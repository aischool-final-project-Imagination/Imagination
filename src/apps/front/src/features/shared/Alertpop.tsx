import { FunctionComponent, MouseEventHandler } from 'react';

export type AlertpopProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Alertpop: FunctionComponent<AlertpopProps> = ({ isOpen, onClose }) => {
  const handleBgClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    onClose();
  };

  const handleContentClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={`alertpop ${isOpen ? 'open' : ''}`} onClick={handleBgClick}>
      {isOpen && (
        <div className="modal-bg">
          <div className="modal-white" onClick={handleContentClick}>
            <div className="modal-header">
              <div className="modal-header-profile">
                <img
                  src="https://i.namu.wiki/i/xl7WXBmp2VQ7mQRz53DlZ_7S1O4CEA_6RERhydKMTPYsdK9oXAcvqhtijh_rHQNw1fYt7skGA4vnMOJNg40jQA.webp"
                  alt=""
                  className="modal-header-img"
                />
                <span>leechi</span>
              </div>
              <button onClick={onClose}>
                <img src="./img/close.png" alt="" />
              </button>
            </div>
            <div className="modal-main">
              <img src="./img/card-img.png" alt="" className="modal-main-img" />
              <div className="modal-main-right-div">
                <div className="modal-main-right">
                  <h3>물감으로 만든 화려한 바다</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    consequatur commodi sequi sit architecto, ex nulla
                    reiciendis modi quaerat quisquam autem officiis recusandae
                    ullam labore, aut quae harum? Perferendis, asperiores!
                  </p>
                </div>
                <div className="modal-main-right-battom">
                  <h5>#물감,#사랑,#바다</h5>
                  <div className="modal-Btn">
                    <button className="modal-LikeBtn">
                      <img src="./img/like.png" alt="" />
                      <span>22</span>
                    </button>
                    <button className="modal-CreateImage">
                      <img src="./img/CreateImage.png" alt="" />
                      <span>Create Image</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div>
                <div className="modal-footer-prompt">
                  <h4>prompt</h4>
                  <div>
                    <img src="./img/copy.png" alt="" />
                    <span>copy</span>
                  </div>
                </div>
                <div className="modal-footer-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corrupti facere, illo accusantium quibusdam unde vitae qui
                    libero. Fugiat maxime ea unde neque illo at. Eveniet quod
                    dolor recusandae sed sit.
                  </p>
                </div>
                </div>
                <div className='prompt-div' >
                  <div className="modal-footer-Nagative">
                    <h4>Negatice Prompt</h4>
                    <div>
                      <img src="./img/copy.png" alt="" />
                      <span>copy</span>
                    </div>
                  </div>
                  <div className="modal-footer-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corrupti facere, illo accusantium quibusdam unde vitae qui
                    libero. Fugiat maxime ea unde neque illo at. Eveniet quod
                    dolor recusandae sed sit.
                  </p>
                </div>
                </div> 
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alertpop;
