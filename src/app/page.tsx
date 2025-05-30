import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Add other sections here as you create them, e.g., Gallery, Testimonials, Contact */}

      {/* Footer (optional, could be in a Layout component) */}
      {/* <Footer /> */}
    </div>
  );
}
