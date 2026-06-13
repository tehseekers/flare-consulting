import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import CoreCapabilities from './components/TechStack';
import OurApproach from './components/Portfolio';
import WhyUs from './components/WhyUs';
import PDPA from './components/PDPA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <CoreCapabilities />
      <OurApproach />
      <WhyUs />
      <PDPA />
      <Contact />
      <Footer />
    </div>
  );
}
