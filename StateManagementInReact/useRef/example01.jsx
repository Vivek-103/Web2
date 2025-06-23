// Importing necessary React hooks
import { useRef, useEffect, useState } from "react";

function App() {
  // Create a ref to access the input DOM element
  const inputRef = useRef(null);

  // useEffect runs once when the component mounts
  useEffect(() => {
    inputRef.current.focus(); // Auto-focus the input field when the app loads
  }, []);

  // useRef to hold the current ID value (for unique ID generation)
  const idRef = useRef(1);

  // useState to hold the list of names; initialized with two entries
  const [names, setNames] = useState([
    { id: idRef.current++, name: "John" }, // John gets ID 1
    { id: idRef.current++, name: "Jane" }, // Jane gets ID 2
  ]);

  // Function to add a new name to the list
  const onAddName = () => {
    setNames([
      ...names, // Keep all existing names
      {
        id: idRef.current++, // Assign a new unique ID
        name: inputRef.current.value, // Get the name from the input box
      },
    ]);
    inputRef.current.value = ""; // Clear the input field after adding
  };

  return (
    <div>
      {/* Display the list of names */}
      <div>
        {names.map((name) => (
          // Display each name and its ID
          <div key={name.name}>
            {name.id} - {name.name}
          </div>
        ))}
      </div>

      {/* Input field to enter a new name, connected to inputRef */}
      <input type="text" ref={inputRef} />

      {/* Button to add the new name to the list */}
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}

export default App; // Export the App component
