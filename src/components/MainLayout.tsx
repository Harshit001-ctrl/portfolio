import { useEffect, useState } from 'react';
import SplineBackground from './SplineBackground';
import ScrollProgressBar from './ScrollProgressBar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Footer from './Footer';

export default function MainLayout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleLoadComplete = () => {
      setIsVisible(true);
    };
    
    window.addEventListener('loadingComplete', handleLoadComplete);
    return () => window.removeEventListener('loadingComplete', handleLoadComplete);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <ScrollProgressBar />
      <SplineBackground />
      <Hero />
      <div className="relative z-10">
        <About />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}