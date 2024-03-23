import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Link } from 'react-router-dom'; 

const loggedInUser = localStorage.getItem('name');

function ProfileNavbar({ darkSide, toggleDarkMode }) {
    const handleLogout = () => {
        localStorage.clear(); // Clear all items from local storage
        // Optionally, you can redirect the user to the login page or perform any other logout-related tasks
      };
    return (
        <nav className="fixed top-0 w-full bg-gray-900 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-gray-900">
                <ul className="flex items-center justify-center flex-grow">
                    <li className="mr-6">
                        <Link to="/navbar" className="text-white px-4 py-2 rounded-md hover:bg-gray-800"> Home</Link>
                    </li>
                    <li>
                    {loggedInUser ? (
                        <Link to="/login">
                        <button className="text-white" onClick={handleLogout}>Logout</button>
                        </Link>
                        ) : (
                        <Link to="/Login" className="text-white">Login</Link>
                    )}
                </li>
                </ul>
                <div>
                    <DarkModeSwitch 
                        checked={darkSide} 
                        onChange={toggleDarkMode} 
                        className="w-10 text-white" // Apply dark mode text color
                    />
                </div>
            </div>
        </nav>
    );
}

export default ProfileNavbar;
