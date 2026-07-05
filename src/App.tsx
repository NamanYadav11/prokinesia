import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TeamPage from './pages/TeamPage';
import BlogsPage from './pages/BlogsPage';
import AppointmentPage from './pages/AppointmentPage';
import ContactPage from './pages/ContactPage';
import AcademyPage from './pages/AcademyPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <Routes>
          <Route path="/"                   element={<HomePage />} />
          <Route path="/about"              element={<AboutPage />} />
          <Route path="/services"           element={<ServicesPage />} />
          <Route path="/services/:id"       element={<ServiceDetailPage />} />
          <Route path="/team"               element={<TeamPage />} />
          <Route path="/blogs"              element={<BlogsPage />} />
          <Route path="/appointment"        element={<AppointmentPage />} />
          <Route path="/contact"            element={<ContactPage />} />
          <Route path="/academy"            element={<AcademyPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
