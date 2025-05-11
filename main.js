// Fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
  
    fadeElements.forEach((el) => observer.observe(el));
  });
  
  // Simulate loading screen
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loading-screen").style.display = "none";
    }, 2400); // enough to see at least 1 cycle
  });
  