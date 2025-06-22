import { useReducer } from 'react'; // Import the useReducer hook from React

//useReducer is a React Hook used to manage complex or structured state.

//It’s like useState, but it gives you more control and is perfect when:

//Your state is an object or array (not just a number or text).

//You need to perform different types of actions on that state.


// UserForm component for handling first and last name inputs
function UserForm() {
  // useReducer for form state with first and last names
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,     // keep existing state
      ...action     // override only the changed value
    }),
    {
      first: "",    // initial first name
      last: "",     // initial last name
    }
  );

  return (
    <div>
      {/* First Name Input */}
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      
      {/* Last Name Input */}
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      
      {/* Display Entered Names */}
      <div>
        First: {state.first}
        <div>Last: {state.last}</div>
      </div>
    </div>
  );
}

// NameList component for adding multiple names to a list
function NameList() {
  // useReducer with actions: SET_NAME and ADD_NAME
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload }; // update input
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, state.name], // add name to list
            name: " ", // reset input
          };
        default:
          return state;
      }
    },
    {
      names: [],   // list of names
      name: " ",   // current input
    }
  );

  return (
    <div>
      {/* Display list of names */}
      <div>
        {state.names.map((name, index) => (
          <div key={index}>{name}</div> // show each name
        ))}
      </div>

      {/* Input for typing a new name */}
      <input
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
      />

      {/* Button to add name to the list */}
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>
        Add Name
      </button>
    </div>
  );
}

// App component combines both UserForm and NameList
function App() {
  return (
    <div>
      <UserForm />
      <NameList />
    </div>
  );
}

export default App; // Export App to be used by React
