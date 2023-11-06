import React, { useState } from 'react'; // Importing React and useState hook from React library
import Modal from './Modal'; // Importing Modal component

// Exporting the Profiles functional component with props
export default function Profiles({ Leaderboard }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle if the modal is open or not
  const [selectedImg, setSelectedImg] = useState(null); // State to handle the selected image

  // Function to open the modal and set the image to be displayed
  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc); // Set the image source to the selected image
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal and reset the selected image
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedImg(null); // Reset the selected image
  };

  // JSX for the component rendering
  return (
    <div id="profile">
      <div className="grid-container">
        {/* Card 1 with dynamic image and score */}
        <div className="card">
          <div className="top-three-blue-box-size">1</div>
          <img 
            className="top-three-img-size"
            src={Leaderboard[0]?.img} 
            alt="Leader One" 
            onClick={() => openModal(Leaderboard[0]?.img)}
          />
          <div className="name">{Leaderboard[0]?.name}</div>
          <div className="membership">{Leaderboard[0]?.membership}</div>
          <div className="score">{Leaderboard[0]?.score}</div>        </div>
        <div className="card">
          <div className="top-three-blue-box-size">2</div>
          <img 
            className="top-three-img-size"
            src={Leaderboard[1]?.img} 
            alt="Leader Two" 
            onClick={() => openModal(Leaderboard[1]?.img)}
          />
          <div className="name">{Leaderboard[1]?.name}</div>
          <div className="membership">{Leaderboard[1]?.membership}</div>
          <div className="score">{Leaderboard[1]?.score}</div>        </div>
        <div className="card">
          <div className="top-three-blue-box-size">3</div>
          <img 
            className="top-three-img-size"
            src={Leaderboard[2]?.img} 
            alt="Leader Three" 
            onClick={() => openModal(Leaderboard[2]?.img)}
          />


          <div className="name">{Leaderboard[2]?.name}</div>
          <div className="membership">{Leaderboard[2]?.membership}</div>
          <div className="score">{Leaderboard[2]?.score}</div>
        </div>
      </div>
      {Item(Leaderboard.slice(3), openModal)} {/* Assuming you want to render the rest starting from the 4th item */}
      <Modal isOpen={isModalOpen} imgSrc={selectedImg} onClose={closeModal} />
    </div>
  )
}
// Function to render leaderboard items
function Item(data, openModal) {

  return (
    <>
      {/* Mapping through the data array to render individual leaderboard items */}
      {data.map((value, index) => (
        <div className="flex" key={index}>
          <div className="item">
            {/* Displaying ranking number */}
            <span className="blue-box">{index + 4}</span>
            {/* Image that, when clicked, opens the modal with the selected image */}
            <img src={value.img} alt="" onClick={() => openModal(value.img)} />
            {/* Info section for the leaderboard item */}
            <div className="info">
              <h3 className='name text-dark'>{value.name}</h3>
              <span>{value.membership}</span>
            </div>                
          </div>
          <div className="item">
              <span>{value.score}</span> {/* Displaying the score */}
          </div>
        </div>
      ))}
    </>
  )
}
