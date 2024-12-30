import { useCallback } from 'react';
import gsap from 'gsap';

export function useSkillsAnimation() {
  const initializeAnimations = useCallback(() => {
    // Title animation
    gsap.to(".myskills", {
      y: -80,
      opacity: 1,
      scrollTrigger: {
        trigger: ".myskills",
        start: "top 199%",
        end: "top 160%",
        scrub: true,
      },
    });

    // Skills animations with toggle and delay
    const skillElements = gsap.utils.toArray('[id^="skill-"]');
    skillElements.forEach((element, index) => {
      gsap.to(element, {
        opacity: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: ".skills",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
        delay: index * 0.18,
      });
    });
  }, []);

  return { initializeAnimations };
}