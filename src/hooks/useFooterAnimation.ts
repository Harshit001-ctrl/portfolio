import { useCallback } from 'react';
import gsap from 'gsap';

export function useFooterAnimation() {
  const initializeFooterAnimation = useCallback(() => {
    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    footerTl
      .to(".name-fotter", {
        y: 0,
        opacity: 1,
        duration: 0.5,
      })
      .to([".address", ".quicklink"], {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
      });
  }, []);

  return { initializeFooterAnimation };
}