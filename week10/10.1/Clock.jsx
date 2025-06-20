// CREATING A CLOCK 
import { useRef,useState } from "react";
// useRef 
// refrence to a value , such that when u change th value the components DOES NOT RE-RENDER
function App() {
  const [currentCount ,setCurrentCount] = useState(1);
  const timer = useRef();

  function startClock(){
    setInterval(function(){
      setCurrentCount(c=>c+1);
    },1000);
    timer.current=value;
  }
  function stopClock(){
    clearInterval(timer.current);

  }
  return<div>
    {currentCount}
    <br/>
    <button onClick={startClock}>Start</button>
    <button>Stop</button>
  </div>
}

export default App;
