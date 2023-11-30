import { useState } from 'react';

const useLeaderLikes = (data: Array<{ _id: string }>) => {
  // 모든 id값의 좋아요 상태를 false로 설정
  const [isLiked, setIsLiked] = useState<Record<string, boolean>>(
    data.reduce((acc, data) => ({ ...acc, [data._id]: false }), {}),
  );

  // 좋아요 상태를 변경하는 함수
  const handleLike = (data_id: string) => {
    setIsLiked((prev) => ({ ...prev, [data_id]: !prev[data_id] }));
  };

  return { isLiked, handleLike };
};

export default useLeaderLikes;
