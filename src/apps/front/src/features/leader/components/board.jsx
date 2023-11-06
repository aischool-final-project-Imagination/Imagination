import React, { useState, useEffect } from 'react'; // Import useState and useEffect hooks from React
import Profiles from './profiles'; // Import Profiles component
import { Leaderboard } from './database'; // Import Leaderboard data array from database.js

import Loading from './Loading'; // Import Loading component for display during data fetching

// Board component definition
export default function Board() {
    const [period, setPeriod] = useState(7); // State to keep track of the selected period for the leaderboard
    const [isLoading, setIsLoading] = useState(true); // State to keep track of the loading status

    useEffect(() => { // Hook to perform side effects in the component
        const timer = setTimeout(() => { // Set a timer to simulate loading time
            setIsLoading(false); // After 3 seconds, set isLoading to false
        }, 3000);
        return () => clearTimeout(timer); // Cleanup function to clear the timer when the component unmounts
    }, []); // Empty dependency array means this effect runs once on mount

    const handleClick = (e) => { // Function to handle click events on period buttons
        const selectedPeriod = parseInt(e.target.dataset.id, 10); // Get the period from the button's dataset
        console.log(`Period selected: ${selectedPeriod} days`); // Log the selected period
        setPeriod(selectedPeriod); // Update the period state
    };

    return (
        <div className="board">
            <h1 className='leaderboard'>Leaderboard of the Week</h1>
            <div className="duration">
                <button onClick={handleClick} data-id='7'>7 Days</button>
                <button onClick={handleClick} data-id='0'>All-Time</button>
                {/* Button to select 30 days period is commented out */}
            </div>
            {isLoading ? ( // Conditional rendering based on isLoading state
                <div className="loader-container loader-background">
                    {/* <Loading type="balls" color="skyblue" /> */}
                    {/* <Loading type="bars" color="blue" /> */}
                    {/* <Loading type="bubbles" color="green" /> */}
                    {/* <Loading type="cubes" color="gray" /> */}
                    {/* <Loading type="cylon" color="pink" /> */}
                    <Loading type="spokes" color="blue" />
                </div>
            ) : (
                <Profiles Leaderboard={between(Leaderboard, period)} /> // Render Profiles with filtered Leaderboard data
            )}
        </div>
    );
}

// Function to filter and sort leaderboard data based on the selected period
function between(data, between){
    const today = new Date(); // Get today's date
    const previous = new Date(today); // Create a new Date object for manipulation
    previous.setDate(previous.getDate() - (between + 1)); // Set the 'previous' date based on the selected period

    let filter = data.filter(val => { // Filter the data array
        let userDate = new Date(val.dt); // Convert each user's date to a Date object
        if (between == 0) return val; // If the period is 0, return all-time data
        return previous <= userDate && today >= userDate; // Return data within the selected period
    })
    // Sort the filtered array by score in descending order
    return filter.sort((a, b) => b.score - a.score);

}
