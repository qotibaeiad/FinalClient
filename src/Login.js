import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { ipAddress } from './App';

function Login() {
    // State variables for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle username input change
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };

    // Function to handle password input change
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
      // Function to login as Guest
    const LoginGuest = () =>{
        window.location.href = '/';
    };

    // Function to check login credentials
    const checkLogin = async () => {
      if (username === '' || password === '') {
          alert('Enter username and password');
          return;
      }

      try {
          const isAuthenticated = await checkUser(username, password);
          if (isAuthenticated) {
              localStorage.setItem('name', username);
              window.location.href = '/';
          } else {
              alert('Incorrect username or password');
          }
      } catch (error) {
          console.error('Error during login:', error);
          alert('An error occurred during login');
      }
  };

     // Function to send login request to the server
     const checkUser = async (username, password) => {
      const apiUrl = `http://${ipAddress}:3000/api/login?username=${username}&password=${password}`;

      try {
          const response = await fetch(apiUrl);
          const data = await response.json();

          if (data.success) {
              localStorage.setItem('loggedInUser', username);
              return true;
          } else {
              return false;
          }
      } catch (error) {
          console.error('Error during login request:', error);
          return false;
      }
    };

  return (
<div className="flex justify-center items-center h-screen" style={{
            backgroundImage: `url('https://www.hindustantimes.com/ht-img/img/2023/07/17/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1689553460678.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="flex justify-center items-center h-screen">
                <div className="w-96 p-6 shadow-lg bg-white rounded-md dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <h1 className="text-3xl block text-center font-semibold text-black dark:text-white"><i className="fa-solid fa-user text-black dark:text-white"></i> Login</h1>
                    <hr className="mt-3" />
                    {/* Username input */}
                    <div className="mt-3">
                        <label htmlFor="username" className="block text-base mb-2 text-black dark:text-white">Username</label>
                        <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 dark:text-gray-400" placeholder="Enter Username..." value={username} onChange={handleUsernameChange} />
                    </div>
                    {/* Password input */}
                    <div className="mt-3">
                        <label htmlFor="password" className="block text-base mb-2 text-black dark:text-white">Password</label>
                        <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 dark:text-gray-400" placeholder="Enter Password..." value={password} onChange={handlePasswordChange} />
                    </div>
                    {/* Remember Me checkbox and Forgot Password link */}
                    <div className="mt-3 font-semibold flex justify-between items-center text-black dark:text-white">
                        <div>
                            <input type="checkbox"   />
                            <label>Remember Me</label>
                        </div>
                        {/* ForgotPassword */}
                        <div>
                            <Link to="/ForgotPassword" className="text-bg-gray-800 font-semibold hover:text-custom-hover text-black dark:text-white">Forgot Password? </Link>
                        </div>
                    </div>
                    {/* Create new account link */}
                    <div className="mt-2">
                        <Link to="/register" className="text-bg-gray-800 font-semibold hover:text-custom-hover text-black dark:text-white">Create new account</Link>
                    </div>
                    {/* Login button */}
                    <div className="mt-5">
                        {/* Login with existing user */}
                        <button type="button" onClick={checkLogin} className="border-2 border-bg-gray-800 bg-gray-800 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-800 font-semibold dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
                        {/* Login as Guest */}
                        <button type="button" onClick={LoginGuest} className="mt-3 border-2 border-gray-800 bg-white text-gray-800 py-1 w-full rounded-md hover:bg-gray-200 font-semibold dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login as Guest</button>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Login;