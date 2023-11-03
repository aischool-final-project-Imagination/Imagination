// import React, { useState } from 'react';

// const FollowingModal = () => {
//   let [follow, setFollow] = useState('');
//   let [list, setList] = useState(['list1', 'list2']);
//   // 그러면 우선적으로 데이터베이스를 생각을 해봐야겠네 true라면 팔로우 false면 언팔로우
//   const handelFollowing = () => {
//     if (count % 2 == 0) {
//       setFollow('Follow');
//     } else {
//       count == 1;
//       setFollow('Unfollow');
//     }
//   };
//   return (
//     <div>
//       <div className="following__bg">
//         <section className="follwing__list">
//           <h1>Following</h1>
//           <i>X</i>
//           <hr />
//           <ul className="following__lists">
//             {list.map((list, i) => {
//               return (
//                 <li className="following__list">
//                   <div className="following__list__info">
//                     <img src="" alt="" />
//                     <div>
//                       <h1>leechi</h1>
//                       <span>나는 이치연입니다.</span>
//                     </div>
//                   </div>
//                   <button
//                     className="following__list__button"
//                     onClick={handelFollowing}
//                   >
//                     {follow}
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default FollowingModal;
