import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import LandingPage  from './pages/landingPage';



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
