import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import LandingPage  from './pages/landingPage';

import Header from './partials/header';
import Footer from './partials/footer';



function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
