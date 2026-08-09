
gsap.registerPlugin(ScrollTrigger);


gsap.from(".skill-card", {
  scrollTrigger: {
    trigger: ".skill-card", 
    start: "top 85%",       
    toggleActions: "play none none none", 
  },

  opacity: 0,     
  duration: 0.8,  
  stagger: 0.2,   
  ease: "power2.out" 
});