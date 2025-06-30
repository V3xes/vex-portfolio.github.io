document.addEventListener('DOMContentLoaded', () => {
  const hoverSound = document.getElementById('hover-sound');
  const clickSound = document.getElementById('click-sound');

  document.querySelectorAll('nav button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      if (hoverSound) {
        hoverSound.currentTime = 0;
        hoverSound.play();
      }
    });

    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const section = document.getElementById(targetId);
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
      }
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
