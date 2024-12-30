import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './components/MainLayout';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-black min-h-screen">
      <LoadingScreen />
      <MainLayout />
    </main>
  );
}