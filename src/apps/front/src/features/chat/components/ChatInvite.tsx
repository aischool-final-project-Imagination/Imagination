import React, { MouseEvent, useLayoutEffect, useState } from 'react';
import { atom, useAtom } from 'jotai';
import classNames from 'classnames';
import axios from 'axios';

export interface UserItem {
  _id: string;
  id: string;
  user_profile_img: string;
  roomId: string;
}

const userListAtom = atom<UserItem[]>([]);

type ChatInviteProps = {
  onClose: () => void;
  onInvited: (data: UserItem) => void;
};

const ChatInvite: React.FC<ChatInviteProps> = ({ onClose, onInvited }) => {
  const [userList, setUserList] = useAtom(userListAtom);
  const [searchValue, setSearchValue] = useState<string>(''); // searchValue 초기화 추가
  const [selected_Id, setSelected_Id] = useState<string>();

  const handleClose = () => {
    onClose();
  };

  const handleClickOutside = (e: MouseEvent) => {
    e.stopPropagation();
    handleClose();
  };

  const handleRadioClick = (_id: string) => {
    setSelected_Id(selected_Id === _id ? undefined : _id);
  };

  const handleChatButtonClick = async () => {
    try {
      const body = {
        user: selected_Id,
        me: sessionStorage.getItem('_id'),
        string: 'room title',
      };

      const response = await axios.post<UserItem>(
        'http://localhost:3000/chat/room',
        body,
      );
      console.log('Invitation sent successfully!', response.data); // 응답으로 받은 BUser를 출력합니다.
      onInvited({ ...response.data });
    } catch (error) {
      console.error('Error sending invitation:', error);
    }
  };

  useLayoutEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get('http://localhost:3000/chat/user');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUserList();
  }, []);

  const handleClickInside = (e: MouseEvent) => {
    e.stopPropagation();

    // NOTE: 절대 노
    // const isRadioButtonSelected = userList.some(
    //   (user) => user._id === selected_Id,
    // );
    // const buttonClass = classNames({
    //   'chat-btn-selected': isRadioButtonSelected,
    // });
    // const buttonElement = document.querySelector(
    //   '.chat-invite-btn button',
    // ) as HTMLButtonElement | null;
    // if (buttonElement) {
    //   buttonElement.className = buttonClass;
    //   buttonElement.disabled = !isRadioButtonSelected;
    // }
  };

  // 사용자 목록 필터링
  const filteredUserList = userList.filter((user) =>
    user.id.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className={`alertpop open`}>
      <div className="chat-invite-bg" onClick={handleClickOutside}>
        <div className="chat-invite-box" onClick={handleClickInside}>
          <div className="chat-invite-title">
            <span>New Messages</span>
            <img src="../chatimg/close.svg" onClick={handleClose} />
          </div>

          <div className="chat-invite-search">
            <input
              type="text"
              placeholder="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <img src="../chatimg/Vector.svg" />
          </div>

          <div className="chat-invite-list">
            {searchValue.trim() !== '' &&
              filteredUserList.map((user) => (
                <div key={user._id} className="chat-invite-elements">
                  <img
                    src={user.user_profile_img}
                    alt={`Profile of ${user.id}`}
                  />
                  <label>{user.id}</label>
                  <div
                    className={classNames('radio', {
                      selected: user._id === selected_Id,
                    })}
                    onClick={() => handleRadioClick(user._id)}
                  ></div>
                </div>
              ))}
          </div>

          <div className={'chat-invite-btn'}>
            <button
              className={classNames({
                'chat-btn-selected': selected_Id,
              })}
              onClick={handleChatButtonClick}
              disabled={!selected_Id}
            >
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInvite;
