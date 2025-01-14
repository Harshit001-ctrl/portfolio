import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useFooterAnimation } from '../hooks/useFooterAnimation';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const { initializeFooterAnimation } = useFooterAnimation();

  useEffect(() => {
    initializeFooterAnimation();
  }, [initializeFooterAnimation]);

  return (
    <footer className="py-16 min-h-[45vh] px-4 bg-[#111]">
      <div className="max-w-6xl mx-auto">
        <h2 className="name-fotter font-quicksand text-5xl text-[#d17777] text-center opacity-0 transform translate-y-10">
          Harshit Rao
        </h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="address opacity-0 transform translate-y-10">
            <h3 className="text-[#d17777] text-2xl mb-6 font-quicksand">Where to find me</h3>
            <div className="flex items-center gap-2">
              <span className="text-white text-lg">Rewari, Haryana IN</span>
            </div>
          </div>

          <div className="quicklink flex flex-col items-center opacity-0 transform translate-y-10">
            <h3 className="text-[#d17777] text-2xl mb-6 font-quicksand">Contact Me</h3>
            <div className="flex gap-8">
              <a 
                href="mailto:harshitrao84@gmail.com" 
                className="text-white hover:text-[#ff98a2] transition-all duration-300 transform hover:scale-125"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
              <a 
                href="https://www.linkedin.com/in/harshit-rao27/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#ff98a2] transition-all duration-300 transform hover:scale-125"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://github.com/Harshit001-ctrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#ff98a2] transition-all duration-300 transform hover:scale-125"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
