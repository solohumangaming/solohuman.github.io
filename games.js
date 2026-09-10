
document.addEventListener("DOMContentLoaded", () => {
  const cards = [...document.querySelectorAll(".game-card")];
  const count = document.getElementById("gameResultCount");
  let type = "all";
  let genre = "all";

  function render() {
    let visible = 0;
    cards.forEach(card => {
      const okType = type === "all" || card.dataset.type === type;
      const okGenre = genre === "all" || card.dataset.genre === genre;
      card.classList.toggle("game-hidden", !(okType && okGenre));
      if (okType && okGenre) visible++;
    });
    count.textContent = visible;
  }

  document.querySelectorAll(".game-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".game-filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      type = btn.dataset.type;
      render();
    });
  });

  document.querySelectorAll(".genre-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".genre-filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      genre = btn.dataset.genre;
      render();
    });
  });

  document.querySelectorAll(".favorite").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      btn.classList.toggle("saved");
      btn.textContent = btn.classList.contains("saved") ? "♥" : "♡";
    });
  });

  document.querySelectorAll(".game-details").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      alert(link.dataset.name + "\n\nGame details page coming next.");
    });
  });

  render();
});
