import React from 'react'; // Import React to enable JSX syntax and component structure
import './style.css'; // Import the external CSS for styling the Modal component

// Modal component definition taking in props: isOpen (boolean), imgSrc (string), and onClose (function)
const Modal = ({ isOpen, imgSrc, onClose }) => {
  // Early return null if isOpen is false, which means do not render anything if the modal is not open
  if (!isOpen) return null;

  // The JSX below will only render if isOpen is true
  return (
    // Modal overlay div which will cover the entire screen
    <div className='modal-overlay' onClick={onClose}>
      {/* Modal content container */}
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        {/* Image to be displayed inside the modal */}
        <img src={imgSrc} alt='Modal pic' />
        {/* Close button for the modal */}
        <button onClick={onClose} className='modal-close'>Close</button>
      </div>
    </div>
  );
};

export default Modal; // Export the Modal component to be used in other parts of the application
