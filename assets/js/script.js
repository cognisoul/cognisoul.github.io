// Scroll fade-in
const elements = document.querySelectorAll(
  '.card, .step, .target li, .case, .cta, .about'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
