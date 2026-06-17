// script.js - Minimalist transition effects

document.addEventListener('DOMContentLoaded', () => {
  // Add a soft fade-in effect to the main elements when the page loads
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, index * 100);
  });
});
