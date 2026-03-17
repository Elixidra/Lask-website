document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const premiumButtons = document.querySelectorAll('.button-primary, .button-secondary');
premiumButtons.forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    button.style.background = `radial-gradient(180px circle at ${x}px ${y}px, rgba(255,255,255,0.34), rgba(255,255,255,0) 48%)`;
  });

  button.addEventListener('mouseleave', () => {
    button.style.background = 'transparent';
  });
});
