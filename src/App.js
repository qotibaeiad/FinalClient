// App.js

import React from 'react';
import Login from './Login'; 
import MyComponent from './navbar';
import Register from './Register';
import Article from './ShowArticle';
import Profile from './Profile';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
export const ipAddress = '192.168.0.100'; // Exporting ipAddress


const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<MyComponent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path='/Article' element={<Article/>}/>
      </Routes>
    </Router>
  );
};

export default App;
