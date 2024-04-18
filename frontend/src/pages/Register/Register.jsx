// import { useState } from 'react';
// import '../Register/register.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// export default function Register() {

//     const [username,setUsername]=useState("");
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");


   
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
    
//         try{

//             const res = await axios.post('https://booking-back-u1gv.onrender.com/api/auth/register',
//             {
//                 username,email,password
//             }
            
//             )
        
//       res.data && window.location.replace('/login');
//         }
        
//         catch(err)
//         {
//             console.log(err);
//         }

    
//     }

  
//     return (
//         <div className="register">
//       <span className="registerTitle">Register</span>
//       <form className="registerForm">
//         <label>Username</label>
//         <input className="registerInput" type="text" placeholder="Enter your username..."autoComplete='off' value={username} 
//          onChange={(e)=>{
//             setUsername(e.target.value);
//         }} 
//         />
//         <label>Email</label>
//         <input className="registerInput" type="text" placeholder="Enter your email..." autoComplete='off'value={email}
//         onChange={(e)=>{
//             setEmail(e.target.value);
//         }}/>
//         <label>Password</label>
//         <input className="registerInput" type="password" placeholder="Enter your password..."autoComplete='off'value={password}
//         onChange={(e)=>{
//             setPassword(e.target.value);
//         }}/>
       

//         <button className="registerButton"onClick={handleSubmit}>Register</button>
//       </form>
//         <Link to ="/login"><button className="registerLoginButton">Login</button></Link>
        
    
//     </div>
//     )
// }


import { useState } from 'react';
import '../Register/register.css'; // Import your existing CSS file
import { Link } from 'react-router-dom';
import axios from 'axios';
import Video from '../../assets/login.mp4';

export default function Register() {

    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    axios.defaults.withCredentials=true;
   
    const handleSubmit=async(e)=>{
        e.preventDefault();
    
        try{

          const res = await axios.post(
            'https://booking-back-u1gv.onrender.com/api/auth/register',
            {
                username,
                email,
                password
            },
            {
                withCredentials: false
            }
        
            )
        
             console.log('Registered successfully');
      res.data && window.location.replace('/login');
        }
        
        catch(err)
        {
            console.log(err);
        }

    
    }


  return (
    <div className="video-container">
      <video autoPlay muted loop className="video-background">
        <source src={Video} type="video/mp4" />
      </video>

      <div className="register">
        <div className="registerField">
          <div className="registerTitle">Register</div>
          <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              className="registerInput"
              type="text"
              placeholder="Enter your username..."
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
             
            />
            <div className="error-message"></div> 

            <label>Email</label>
            <input
              className="registerInput"
              type="email"
              placeholder="Enter your email..."
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             
            />
            <div className="error-message"></div> 

            <label>Password</label>
            <input
              className="registerInput"
              type="password"
              placeholder="Enter your password..."
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="registerButton" type="submit">
              Register
            </button>
          </form>
          <p style={{ color: 'white', fontSize: '16px', textAlign: 'center', paddingTop: '4px' }}>
            Already have an account?{' '}
            <Link to="/login">
              <span style={{ textDecoration: 'underline', color: 'white' }}>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )}
