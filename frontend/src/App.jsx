import { useState } from 'react'
import axios from 'axios';

import { Routes,Route } from 'react-router-dom';
import Register from './pages/Register/Register';
//import Topbar from './Components/Topbar/Topbar'
// functin App() {
//   const [count, setCount] = useState(0)

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
// axios.defaults.withCredentials=true;
//   const handleRegister = async () => {
//       try {
//           await axios.post('https://mern-auth-api2.vercel.app/api/auth/register', { username, password });
//           console.log('Registered successfully');
//       } catch (error) {
//           console.error('Registration failed:', error.response.data.message);
//       }
//   };

//   return (
//       <div>
//           <h2>Register</h2>
//           <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           <button onClick={handleRegister}>Register</button>
//       </div>
//   )
// }

// export default App

function App()
{
return (
    <>
   
    <Routes>
      <Route path="/" element={<Register/>} />
  
    </Routes>
    </>
)
}
export default App;