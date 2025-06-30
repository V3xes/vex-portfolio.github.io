const hoverSound = document.getElementById('hover-sound');
const clickSound = document.getElementById('click-sound');

document.querySelectorAll('nav button').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play();
    }
  });

  button.addEventListener('mouseenter', () => {
    if (hoverSound) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});

document.querySelectorAll('#socials a, #socials-contact a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    if (hoverSound) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});

// Animate sections when they scroll into view
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.content-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        entry.target.classList.remove('pre-animate');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    observer.observe(section);
  });
});
