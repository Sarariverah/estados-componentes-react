import Input from './components/Input'
import {useState} from 'react'

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1 className='text-center bg-dark text-light'>Estados de formularios</h1>
      <Input name={[name, setName]} password={[password, setPassword]}/>
    </div>
  );
}

export default App;
