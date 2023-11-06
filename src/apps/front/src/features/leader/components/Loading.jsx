import React from 'react'; // Import React
import ReactLoading from 'react-loading'; // Import ReactLoading component from 'react-loading' library

// Loading component definition, receiving type and color props
const Loading = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={'80%'} width={'80%'} />
    // Render the ReactLoading component with given props and styles
);

export default Loading; // Export the Loading component
