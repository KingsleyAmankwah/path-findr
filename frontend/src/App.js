import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Mentor from './Pages/Mentor.jsx';
import AfterSurvey from './Pages/AfterSurvey.jsx';
import Survey from './components/Survey.js';
import ChatApp from './Pages/ChatApp.jsx';
import Fields from './Pages/Fields.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/fields" element={<Fields/>} />
        <Route path="/after-survey" element={<AfterSurvey />} />
        <Route path="/chat-mentor" element={<ChatApp />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
