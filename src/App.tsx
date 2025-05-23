import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import Index from "./pages/Index";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Interests from "./pages/Interests";
import Languages from "./pages/Languages";
import Testimonials from "./pages/Testimonials";
import Platforms from "./pages/Platforms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LifeLogs from "./pages/LifeLogs";

const App = () => {
  return (
    <HelmetProvider> {/* Wrap your app with HelmetProvider */}
      <Router>
        <AppWithLocation />
      </Router>
    </HelmetProvider>
  );
};

const AppWithLocation = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollPaths = [
      '/certifications',
      '/education',
      '/skills',
      '/platforms',
      '/contact',
      '/projects',
      '/achievements',
      '/interests',
      '/testimonials',
      '/lifelogs',
    ];
  
    if (scrollPaths.includes(location.pathname)) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/lifelogs" element={<LifeLogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
