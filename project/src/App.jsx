import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Organizations from './pages/Organizations';
import Stories from './pages/Stories';
import About from './pages/About';
import Donate from './pages/Donate';
import Login from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Always render Navbar */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/organizations" element={<Organizations />} />
          <Route exact path="/stories" element={<Stories />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUpForm />} />
          {/* Fallback Route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
