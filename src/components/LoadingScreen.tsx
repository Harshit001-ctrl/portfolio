import { useEffect } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(".loading-text", {
      opacity: 1,
      stagger: {
        each: 0.14,
        yoyo: true,
        repeat: 1,
      },
    })
    .to(".loading-number", {
      opacity: 1,
      duration: 0.2,
      stagger: {
        each: 0.11,
        yoyo: true,
        repeat: 1,
      },
    })
    .to(".loading-container", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // Dispatch custom event when loading is complete
        window.dispatchEvent(new Event('loadingComplete'));
      }
    })
    .set(".loading-container", { display: "none" });
  }, []);

  const numbers = [1, 2, 5, 10, 20, 28, 35, 45, 55, 65, 70, 80, 90, 96, 100];

  return (
    <div className="loading-container fixed inset-0 z-50 bg-black">
      <div className="loading-text flex justify-center text-white text-5xl opacity-0">
        LOADING
      </div>
      <div className="flex items-center gap-[3.9vw] h-screen justify-center">
        {numbers.map((num) => (
          <div key={num} className="loading-number text-5xl opacity-0 text-white">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}