import React from 'react';

const EditModal = () => {
  return (
    <div className="edit__modal">
      <section className="edit__modal__box">
        <div className="edit__modal__background"></div>
        <div className="edit__modal__white">
          <div className="edit__modal__photo"></div>
          <input type="file" className="edit__modal__upload--hidden" />
          <div className="edit__modal__upload">
            <img src="add.png" alt="" />
            <span>프로필 이미지</span>
          </div>
        </div>
        <div className="edit__modal__inputs">
          <input type="text" placeholder="이름 변경" />
          <input type="text" placeholder="상태메시지 변경하기" />
        </div>
        <div className="edit__modal__footer">
          <button className="edit__modal__reset">초기화하기</button>
          <div>
            <button className="edit__modal__cancel">취소하기</button>
            <button className="edit__modal__change">정보변경</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditModal;
