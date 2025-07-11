
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".feature-card.fade-in");
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("animated");
    }
  });
});
window.dispatchEvent(new Event("scroll"));
