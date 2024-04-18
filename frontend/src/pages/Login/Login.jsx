
import { Link } from 'react-router-dom';


import './login.css'; // Import your existing CSS file

import Video from "../../assets/login.mp4";
const Login = () => {
  
  return (

    <div className="login-wrapper">
   
    <div className="video-container"> {/* Add the video container */}
      <video autoPlay muted loop className="video-background" style={{objectFit:'cover',maxHeight:'100%'}}>
        <source src={Video} type="video/mp4" />
      </video>

      <div className="login">
        <div className="loginFieldsContainer">
          <div className="loginTitle">Login</div>
          <form className="loginForm" >
            <label style={{color:'white'}}>Email</label>
            <input
              className="loginInput"
              type="email"
              
              placeholder="Enter your email..."
              
            
            />
            <label  style={{color:'white'}}>Password</label>
            <input
              className="loginInput"
              type="password"
              placeholder="Enter your password..."
           
           
            />
            <button className="loginButton" type="submit">
              Login
            </button>
            {true && (
              <div className="login-error">Wrong Email or Password</div>
            )}
          </form>
          <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', paddingTop: '4px' }}>
            Don't have an account?{' '} 
            <Link to="/register">
              <span style={{ textDecoration: 'underline', color: 'white' }}>
                Register
              </span>
            </Link>
          </p>
          <p style={{ color: 'white', fontSize: '14px', textAlign: 'center' }}>
            Forgot Password?{' '}
            <Link to="/forgotpassword">
              <span style={{ textDecoration: 'underline', color: 'white', marginLeft: '3px' }}>Reset</span>
            </Link>
          </p> 
        </div>
      </div>
    </div>
       
    </div>
  );
};

export default Login;
