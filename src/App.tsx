import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import heroBackground from './assets/hero-bg.jpeg';
import ImageSearchPage from './pages/ImageSearchPage';
import SearchResultsPage from './pages/SearchResultsPage';
import LocationDetailPage from './pages/LocationDetailPage';
import BookingEnquiryPage from './pages/BookingEnquiry';
 import ContactPage from './pages/ContactPage';
import ListPropertyPage from './pages/ListPropertyPage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import './index.css';
import Navbar from './components/Navbar';
import PermitsPage from './pages/PermitsPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image-search" element={<ImageSearchPage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/location-detail" element={<LocationDetailPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/booking-enquiry" element={<BookingEnquiryPage />} />
        <Route path="/Permits" element={<PermitsPage />} />
        <Route path="/list-property" element={<ListPropertyPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;