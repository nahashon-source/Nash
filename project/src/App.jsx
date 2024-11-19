import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Organizations from './pages/Organizations';
import Stories from './pages/Stories';
import About from './pages/About';
import Donate from './pages/Donate';
import ManageBeneficiariesPage from './pages/ManageBeneficiariesPage';
import Login from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';

function App() {
  // Check if the user is logged in from localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Only render Navbar if user is logged in */}
        {isLoggedIn && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/beneficiary-list" element={<ManageBeneficiariesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
