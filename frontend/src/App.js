import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Mentor from './Pages/Mentor.jsx';
import AfterSurvey from './Pages/AfterSurvey.jsx';
import Survey from './Pages/Survey.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} /> {/* Route for the root path */}
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/after-survey" element={<AfterSurvey />} />
      </Routes>
    </Router>
  );
}

export default App;
