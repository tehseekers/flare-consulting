import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Industries from './components/Industries';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Industries />
      <Portfolio />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
