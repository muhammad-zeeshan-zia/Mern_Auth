import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
      try {
          await axios.post('http://localhost:5000/api/auth/register', { username, password });
          console.log('Registered successfully');
      } catch (error) {
          console.error('Registration failed:', error.response.data.message);
      }
  };

  return (
      <div>
          <h2>Register</h2>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleRegister}>Register</button>
      </div>
  )
}

export default App
