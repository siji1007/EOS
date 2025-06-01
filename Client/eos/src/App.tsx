import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import LandingPage from './pages/landingPage';
import About from './pages/About';

import Header from './partials/header';
import Footer from './partials/footer';

import FormLayout from './admin/BuildingForm/FormLayout';
import Assessment from './admin/Assessment';
import Track from './admin/Track';
import LoginModal from './Auth/login';
import Settings from './admin/Settings';
import Signup from './Auth/signup';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginModal isOpen={false} onClose={function (): void {
              throw new Error('Function not implemented.');
            } } />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<LandingPage />}>
              <Route index element={<Navigate to="Form" replace />} />
              <Route path="Form" element={<FormLayout />} />
              <Route path="Assessment" element={<Assessment />} />
              <Route path="Track" element={<Track />} />
              <Route path="Settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
