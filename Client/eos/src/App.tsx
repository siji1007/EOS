import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import LandingPage  from './pages/landingPage';

import Header from './partials/header';
import Footer from './partials/footer';

import FormLayout from './admin/BuildingForm/FormLayout';
import Assessment from './admin/Assessment';
import Track from './admin/Track';
import Settings from './admin/Settings';





function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<LandingPage />}>
          <Route index element={<Navigate to="Form" replace />} /> 
          <Route path="Form" element={<FormLayout />} />
          <Route path="Assessment" element={<Assessment />} />
          <Route path="Track" element={<Track />} />
          <Route path="Settings" element={<Settings />} />
        </Route>




        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
