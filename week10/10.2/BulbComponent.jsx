// EXAMPLE TO SHOW ROLLING UP THE STATE IT IS NOT A GOOD WAY TO ROLL UP THE STATE 
// AS IT IS AN UGLY WAY TO WRITE REACT CODES
// GENERALLY USE A STATE MANAGEMENT LIBRARY LIKE ZUSTAND TO KEEP YOUR STATE AT BETTER PLACES AND MAINTAIN PROPER CODE FUNCITONALITIES.


import { useState } from 'react'
import './App.css'

function App() {
  return <div>
    <LightBulb />
  </div>
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true)

  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function BulbState({bulbOn}) {
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState({bulbOn, setBulbOn}) {

  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
    
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
