import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import AcademicsPage from "./pages/AcademicsPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import StudentRulesPage from "./pages/StudentRulesPage";
import ExtracurricularPage from "./pages/ExtracurricularPage";
import GalleryPage from "./pages/GalleryPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import ContactPage from "./pages/ContactPage";
import PTAPage from "./pages/PTAPage";
import NotFoundPage from "./pages/NotFoundPage";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="pta" element={<PTAPage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="academics" element={<AcademicsPage />} />
          <Route path="facilities" element={<FacilitiesPage />} />
          <Route path="rules&reg" element={<StudentRulesPage />} />
          <Route path="extracurricular" element={<ExtracurricularPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="news-events" element={<NewsEventsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
