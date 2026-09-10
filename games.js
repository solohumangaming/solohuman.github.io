const data = {
  games: [
    {
      name: "Warframe", type: "free", badge: "HOT", genre: "Action", rating: "4.7",
      size: "35 GB", platforms: "PC / PS5 / Xbox", description: "Free-to-play co-op action shooter with deep customization.",
      art: "warframe", mark: "WF", poster: "assets/warframe.jpg"
    },
    {
      name: "Path of Exile 2", type: "free", badge: "NEW", genre: "RPG", rating: "4.8",
      size: "60 GB", platforms: "PC / PS5", description: "Dark fantasy ARPG with brutal combat and deep skill trees.",
      art: "poe", mark: "POE", poster: "assets/poe.jpg"
    },
    {
      name: "Genshin Impact", type: "free", badge: "", genre: "RPG", rating: "4.5",
      size: "80 GB", platforms: "PC / Mobile / PS5", description: "Open-world anime RPG with gacha mechanics and stunning visuals.",
      art: "genshin", mark: "GI", poster: "assets/genshin.jpg"
    },
    {
      name: "Apex Legends", type: "free", badge: "", genre: "FPS", rating: "4.4",
      size: "22 GB", platforms: "PC / Console", description: "Fast-paced battle royale with unique legend abilities.",
      art: "apex", mark: "AL", poster: "assets/apex.jpg"
    },
    {
      name: "Elden Ring", type: "paid", price: "$59.99", badge: "MUST PLAY", genre: "RPG", rating: "4.9",
      size: "45 GB", platforms: "PC / PS5 / Xbox", description: "FromSoftware's masterpiece open-world action RPG.",
      art: "elden", mark: "ER", poster: "assets/elden.jpg"
    },
    {
      name: "Cyberpunk 2077", type: "paid", price: "$39.99", badge: "", genre: "Action", rating: "4.6",
      size: "70 GB", platforms: "PC / PS5 / Xbox", description: "Immersive open-world RPG set in a dystopian future city.",
      art: "cyberpunk", mark: "CP", poster: "assets/cyberpunk.jpg"
    },
    {
      name: "Baldur's Gate 3", type: "paid", price: "$59.99", badge: "GOTY", genre: "RPG", rating: "4.9",
      size: "150 GB", platforms: "PC / PS5", description: "Award-winning D&D RPG with unmatched depth and freedom.",
      art: "bg3", mark: "BG3", poster: "assets/bg3.jpg"
    },
    {
      name: "Hollow Knight", type: "paid", price: "$14.99", badge: "", genre: "Indie", rating: "4.8",
      size: "9 GB", platforms: "PC / Switch / Console", description: "Atmospheric metroidvania with challenging combat and lore.",
      art: "hollow", mark: "HK", poster: "assets/hollow.jpg"
    },
    {
      name: "Valorant", type: "free", badge: "NEW", genre: "FPS", rating: "4.6",
      size: "35 GB", platforms: "PC", description: "Tactical 5v5 shooter combining precise gunplay with agents.",
      art: "valorant", mark: "V"
    },
    {
      name: "Free Fire", type: "free", badge: "", genre: "FPS", rating: "4.3",
      size: "1.5 GB", platforms: "Mobile", description: "Quick battle royale matches built for fast competitive play.",
      art: "freefire", mark: "FF"
    },
    {
      name: "Civilization VI", type: "paid", price: "$29.99", badge: "", genre: "Strategy", rating: "4.7",
      size: "17 GB", platforms: "PC / Switch / Console", description: "Build an empire, research technologies and shape history.",
      art: "civ", mark: "CIV"
    },
    {
      name: "Resident Evil 4", type: "paid", price: "$39.99", badge: "HORROR", genre: "Horror", rating: "4.8",
      size: "67 GB", platforms: "PC / PS5 / Xbox", description: "A tense survival-horror adventure with modern action gameplay.",
      art: "re4", mark: "RE4"
    }
  ],

  software: [
    ["OBS Studio", "STREAMING", "OBS", "Open-source / official"],
    ["7-Zip", "FILE UTILITY", "7Z", "Open-source / official"],
    ["VLC Media Player", "MEDIA", "VLC", "Open-source / official"],
    ["ShareX", "SCREEN TOOLS", "SX", "Open-source / official"]
  ],

  wallpapers: [
    ["Gaming 4K", "PC • 4K", "4K", "Wallpaper collection"],
    ["Anime 4K", "ANIME • 4K", "AN", "Wallpaper collection"],
    ["Minimal Dark", "DESKTOP • HD", "MD", "Wallpaper collection"],
    ["Solo Human", "BRAND • 4K", "SH", "Wallpaper collection"]
  ]
};

/* Standalone Games page — no homepage/SPA logic */
const gamesGrid = document.getElementById("gamesGrid");

function gameCards(items) {
  return items.map(game => `
    <article class="game-card" data-type="${game.type}" data-genre="${game.genre}">
      <div class="game-art ${game.art}" ${game.poster ? `style="background-image:url('${game.poster}')` : ""}>
        <div class="art-glow"></div>
        <span class="game-badge ${game.type}">${game.type === "free" ? "FREE" : game.price}</span>
        ${game.badge ? `<span class="game-tag">${game.badge}</span>` : ""}
        <button class="favorite" aria-label="Favorite ${game.name}" onclick="toggleFavorite(event, this)">♡</button>
        <strong>${game.mark}</strong>
      </div>
      <div class="game-body">
        <div class="game-title-row">
          <h3>${game.name}</h3>
          <span class="game-rating">☆ ${game.rating}</span>
        </div>
        <p>${game.description}</p>
        <div class="game-meta">
          <span>${game.genre}</span><span>${game.size}</span>
        </div>
        <div class="game-platforms">▣ ${game.platforms}</div>
        <a class="game-details" href="#" onclick="return gameDetails(event, '${game.name.replace(/'/g, "\\'")}')">View Details <b>→</b></a>
      </div>
    </article>
  `).join("");
}

function toggleFavorite(e, button) {
  e.preventDefault();
  e.stopPropagation();
  button.classList.toggle("saved");
  button.textContent = button.classList.contains("saved") ? "♥" : "♡";
}

function gameDetails(e, name) {
  e.preventDefault();
  alert(name + "\\n\\nGame details page coming next.");
  return false;
}

let activeGameType = "all";
let activeGameGenre = "all";

function renderGames() {
  const filtered = data.games.filter(game =>
    (activeGameType === "all" || game.type === activeGameType) &&
    (activeGameGenre === "all" || game.genre === activeGameGenre)
  );
  gamesGrid.innerHTML = gameCards(filtered);
  document.getElementById("gameResultCount").textContent = filtered.length;
}

document.querySelectorAll(".game-filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".game-filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    activeGameType = button.dataset.type;
    renderGames();
  });
});

document.querySelectorAll(".genre-filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".genre-filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    activeGameGenre = button.dataset.genre;
    renderGames();
  });
});

document.getElementById("freeCount").textContent = data.games.filter(g => g.type === "free").length;
document.getElementById("paidCount").textContent = data.games.filter(g => g.type === "paid").length;
renderGames();
