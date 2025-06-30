// Play sound helpers
const hoverSound = document.getElementById('hover-sound');
const clickSound = document.getElementById('click-sound');

function playSound(sound) {
  sound.currentTime = 0;
  sound.play().catch(() => {}); // catch to avoid error if sound blocked by browser
}

// Play hover sound on nav buttons & socials (including GitHub link)
document.querySelectorAll('nav.top-bar button, nav.top-bar a.github-btn, #socials a, #socials-contact a').forEach(el => {
  el.addEventListener('mouseenter', () => {
    playSound(hoverSound);
    el.classList.add('hover-animate');
  });
  el.addEventListener('mouseleave', () => {
    el.classList.remove('hover-animate');
  });
});

// Play click sound on nav buttons & socials (including GitHub link)
document.querySelectorAll('nav.top-bar button, nav.top-bar a.github-btn, #socials a, #socials-contact a').forEach(el => {
  el.addEventListener('click', () => {
    playSound(clickSound);
  });
});

// Simple smooth scroll navigation (only nav buttons, NOT GitHub link)
document.querySelectorAll('nav.top-bar button').forEach(btn => {
  btn.addEventListener('click', e => {
    const targetId = btn.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Highlight active nav button
    document.querySelectorAll('nav.top-bar button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Initial active button
document.querySelector('nav.top-bar button[data-target="home"]').classList.add('active');
