
document.querySelectorAll(".sidebar a").forEach(link =>
  link.addEventListener("click", () => {
    document.querySelectorAll(".sidebar a").forEach(link => link.classList.remove("active"));
    link.classList.add("active");
  })
);
