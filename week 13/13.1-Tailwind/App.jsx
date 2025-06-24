import './App.css'
import { Button } from './components/button';
import { Input } from './components/input';
function App() {
  return (
    <div className='h-screen bg-blue-700'>
      <br/><br/><br/><br/>
      <Input type = "text" placeholder={"username"}></Input>
      <Button disabled={false}>Signup</Button>
    </div>
  );
}

export default App;  
