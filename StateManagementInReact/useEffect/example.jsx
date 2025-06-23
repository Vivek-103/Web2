//useEffect IMPLEMENTATION
//useEffect is a React Hook that lets you run side effects in your components.

//These are things React doesn’t do by default during rendering — like -:
//Fetching data from an API
//Setting or clearing a timer
//Updating the DOM manually
//Subscribing/unsubscribing to a service (like WebSocket)


// Importing React hooks: useState for state, useEffect for side-effects like timers or fetches
import { useState, useEffect } from "react";

// Stopwatch component that shows time increasing every second
const Stopwatch = () => {
  // Declare a state variable 'time' starting at 0
  const [time, setTime] = useState(0);

  // This useEffect runs once when the component mounts
  useEffect(() => {
    // Start a timer that runs every 1000ms (1 second)
    const interval = setInterval(() => {
      // Increase the 'time' by 1 every second
      setTime((t) => {
        console.log(t); // Log the current time before incrementing
        return t + 1;    // Increment time
      });
    }, 1000);

    // Cleanup: stop the timer when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array = run once

  // Display the time
  return <div>Time: {time}</div>;
};

function App() {
  // State to hold list of names fetched from names.json
  const [names, setNames] = useState([]);

  // useEffect to fetch names only once when component loads
  useEffect(() => {
    // Fetch the names.json file
    fetch("/names.json")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setNames(data));     // Store the list of names in state
  }, []); // Run once

  // State to hold details of selected name
  const [seletedNameDetails, setSelectedNameDetails] = useState(null);

  // Function that runs when a name button is clicked
  const onSelectedNameChange = (name) => {
    // Fetch the corresponding details JSON file for the clicked name
    fetch(`/${name}.json`)
      .then((response) => response.json())       // Convert response to JSON
      .then((data) => setSelectedNameDetails(data)); // Store in state
  };

  return (
    <div>
      {/* Include Stopwatch component */}
      <Stopwatch />

      {/* Render a button for each name fetched */}
      <div>
        {names.map((name) => (
          <button onClick={() => onSelectedNameChange(name)}>{name}</button>
        ))}
      </div>

      {/* Show the selected name's details as raw JSON */}
      <div>{JSON.stringify(seletedNameDetails)}</div>
    </div>
  );
}

export default App; // Export the main App component
