const data = {
  games: [
    {
      name: "Warframe", type: "free", badge: "HOT", genre: "Action", rating: "4.7",
      size: "35 GB", platforms: "PC / PS5 / Xbox", description: "Free-to-play co-op action shooter with deep customization.",
      art: "warframe", mark: "WF"
    },
    {
      name: "Path of Exile 2", type: "free", badge: "NEW", genre: "RPG", rating: "4.8",
      size: "60 GB", platforms: "PC / PS5", description: "Dark fantasy ARPG with brutal combat and deep skill trees.",
      art: "poe", mark: "POE"
    },
    {
      name: "Genshin Impact", type: "free", badge: "", genre: "RPG", rating: "4.5",
      size: "80 GB", platforms: "PC / Mobile / PS5", description: "Open-world anime RPG with gacha mechanics and stunning visuals.",
      art: "genshin", mark: "GI"
    },
    {
      name: "Apex Legends", type: "free", badge: "", genre: "FPS", rating: "4.4",
      size: "22 GB", platforms: "PC / Console", description: "Fast-paced battle royale with unique legend abilities.",
      art: "apex", mark: "AL"
    },
    {
      name: "Elden Ring", type: "paid", price: "$59.99", badge: "MUST PLAY", genre: "RPG", rating: "4.9",
      size: "45 GB", platforms: "PC / PS5 / Xbox", description: "FromSoftware's masterpiece open-world action RPG.",
      art: "elden", mark: "ER"
    },
    {
      name: "Cyberpunk 2077", type: "paid", price: "$39.99", badge: "", genre: "Action", rating: "4.6",
      size: "70 GB", platforms: "PC / PS5 / Xbox", description: "Immersive open-world RPG set in a dystopian future city.",
      art: "cyberpunk", mark: "CP"
    },
    {
      name: "Baldur's Gate 3", type: "paid", price: "$59.99", badge: "GOTY", genre: "RPG", rating: "4.9",
      size: "150 GB", platforms: "PC / PS5", description: "Award-winning D&D RPG with unmatched depth and freedom.",
      art: "bg3", mark: "BG3"
    },
    {
      name: "Hollow Knight", type: "paid", price: "$14.99", badge: "", genre: "Indie", rating: "4.8",
      size: "9 GB", platforms: "PC / Switch / Console", description: "Atmospheric metroidvania with challenging combat and lore.",
      art: "hollow", mark: "HK"
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

/* =========================
   LOAD CARDS
========================= */

const gamesGrid = document.getElementById("gamesGrid");
const gamesPreviewGrid = document.getElementById("gamesPreviewGrid");
const softwareGrid = document.getElementById("softwareGrid");
const wallpaperGrid = document.getElementById("wallpaperGrid");

function gameCards(items) {
  return items.map(game => `
    <article class="game-card" data-type="${game.type}" data-genre="${game.genre}">
      <div class="game-art ${game.art}">
        <div class="art-glow"></div>
        <span class="game-badge ${game.type}">${game.type === "free" ? "FREE" : game.price}</span>
        ${game.badge ? `<span class="game-tag">${game.badge}</span>` : ""}
        <button class="favorite" aria-label="Add ${game.name} to favorites" onclick="toggleFavorite(event, this)">♡</button>
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

if (gamesGrid) {
  gamesGrid.innerHTML = gameCards(data.games);
}

if (gamesPreviewGrid) {
  gamesPreviewGrid.innerHTML = gameCards(data.games.slice(0, 4));
}

if (softwareGrid) {
  softwareGrid.innerHTML = cards(data.software);
}

if (wallpaperGrid) {
  wallpaperGrid.innerHTML = cards(data.wallpapers);
}

const freeCount = data.games.filter(game => game.type === "free").length;
const paidCount = data.games.filter(game => game.type === "paid").length;
const freeCountEl = document.getElementById("freeCount");
const paidCountEl = document.getElementById("paidCount");
if (freeCountEl) freeCountEl.textContent = freeCount;
if (paidCountEl) paidCountEl.textContent = paidCount;

let activeGameType = "all";
let activeGameGenre = "all";

function renderGames() {
  if (!gamesGrid) return;

  const filtered = data.games.filter(game => {
    const typeMatch = activeGameType === "all" || game.type === activeGameType;
    const genreMatch = activeGameGenre === "all" || game.genre === activeGameGenre;
    return typeMatch && genreMatch;
  });

  gamesGrid.innerHTML = gameCards(filtered);

  const result = document.getElementById("gameResultCount");
  if (result) result.textContent = filtered.length;
}

document.querySelectorAll(".game-filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".game-filter").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    activeGameType = button.dataset.type;
    renderGames();
  });
});

document.querySelectorAll(".genre-filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".genre-filter").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    activeGameGenre = button.dataset.genre;
    renderGames();
  });
});

function toggleFavorite(e, button) {
  e.preventDefault();
  e.stopPropagation();
  button.classList.toggle("saved");
  button.textContent = button.classList.contains("saved") ? "♥" : "♡";
}

function gameDetails(e, name) {
  e.preventDefault();
  alert(name + "\\n\\nGame details page coming next. Add your official/authorized link when ready.");
  return false;
}

renderGames();


/* =========================
   DEMO DOWNLOAD
========================= */

function demo(e) {
  e.preventDefault();

  alert(
    "Replace this button's # link with your official or legally shareable download URL."
  );

  return false;
}


/* =========================
   SINGLE PAGE NAVIGATION
========================= */

const pageSections = [
  "home",
  "games",
  "software",
  "wallpapers",
  "anime",
  "youtube",
  "support",
  "more"
];

function showPage(page) {

  if (!pageSections.includes(page)) {
    page = "home";
  }

  /*
    Homepage elements
  */

  const hero = document.querySelector(".hero");
  const categories = document.querySelector(".categories");

  const games = document.getElementById("games");
  const gamesPreview = document.getElementById("gamesPreview");
  const software = document.getElementById("software");
  const wallpapers = document.getElementById("wallpapers");

  const split = document.querySelector(".split");
  const creator = document.getElementById("creator");
  const reviews = document.getElementById("reviews");
  const more = document.getElementById("more");

  const notices = document.querySelectorAll(".notice");
  const support = document.querySelector(".support");
  const discord = document.querySelector(".discord");

  /*
    Hide everything first
  */

  if (hero) hero.style.display = "none";
  if (categories) categories.style.display = "none";

  if (games) games.style.display = "none";
  if (gamesPreview) gamesPreview.style.display = "none";
  if (software) software.style.display = "none";
  if (wallpapers) wallpapers.style.display = "none";

  if (split) split.style.display = "none";
  if (creator) creator.style.display = "none";
  if (reviews) reviews.style.display = "none";
  if (more) more.style.display = "none";

  notices.forEach(x => {
    x.style.display = "none";
  });

  if (support) support.style.display = "none";
  if (discord) discord.style.display = "none";


  /*
    HOME
  */

  if (page === "home") {

    if (hero) hero.style.display = "";
    if (categories) categories.style.display = "";

    if (gamesPreview) gamesPreview.style.display = "";
    if (software) software.style.display = "";
    if (wallpapers) wallpapers.style.display = "";

    if (split) split.style.display = "";
    if (creator) creator.style.display = "";
    if (reviews) reviews.style.display = "";
    if (more) more.style.display = "";

    notices.forEach(x => {
      x.style.display = "";
    });

    if (support) support.style.display = "";
    if (discord) discord.style.display = "";
  }


  /*
    GAMES
  */

  else if (page === "games") {

    if (games) games.style.display = "";
  }


  /*
    SOFTWARE
  */

  else if (page === "software") {

    if (software) software.style.display = "";
  }


  /*
    WALLPAPERS
  */

  else if (page === "wallpapers") {

    if (wallpapers) wallpapers.style.display = "";
  }


  /*
    ANIME
  */

  else if (page === "anime") {

    if (split) {
      split.style.display = "";
    }

    if (split) {
      const panels = split.querySelectorAll(".panel");

      panels.forEach(panel => {
        panel.style.display = "none";
      });

      const animePanel = document.getElementById("anime");

      if (animePanel) {
        animePanel.style.display = "";
      }
    }

    document.querySelectorAll(
      "#anime-apps, #anime-sites, #anime-news"
    ).forEach(x => {
      x.style.display = "";
    });
  }


  /*
    YOUTUBE
  */

  else if (page === "youtube") {

    if (split) {
      split.style.display = "";
    }

    if (split) {
      const panels = split.querySelectorAll(".panel");

      panels.forEach(panel => {
        panel.style.display = "none";
      });

      const youtubePanel = document.getElementById("youtube");

      if (youtubePanel) {
        youtubePanel.style.display = "";
      }
    }

    document.querySelectorAll("#youtube-news, #tools").forEach(x => {
      x.style.display = "";
    });
  }


  /*
    HELP
  */

  else if (page === "support") {

    if (support) support.style.display = "";

    if (discord) discord.style.display = "";
  }


  /*
    MORE
  */

  else if (page === "more") {

    if (more) more.style.display = "";

    document.querySelectorAll("#tools").forEach(x => {
      x.style.display = "";
    });
  }


  /*
    ACTIVE NAVBAR
  */

  document.querySelectorAll(".nav nav a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === "#" + page) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

  });


  /*
    Scroll to top
  */

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   NAVBAR CLICK
========================= */

document.querySelectorAll(".nav nav a").forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const target = this.getAttribute("href").replace("#", "");

    showPage(target);

    history.pushState(
      null,
      "",
      "#" + target
    );
  });

});

document.querySelectorAll('a[href="#games"]').forEach(link => {
  if (link.closest(".nav nav")) return;

  link.addEventListener("click", function(e) {
    e.preventDefault();
    showPage("games");
    history.pushState(null, "", "#games");
  });
});


/* =========================
   CATEGORY TILES
========================= */

document.querySelectorAll(".categories a").forEach(link => {

  link.addEventListener("click", function(e) {

    const href = this.getAttribute("href");

    if (!href || !href.startsWith("#")) return;

    e.preventDefault();

    let target = href.substring(1);

    /*
      Extra category links
      go to their main section
    */

    if (
      target === "anime-apps" ||
      target === "anime-sites" ||
      target === "anime-news"
    ) {
      target = "anime";
    }

    if (
      target === "creator" ||
      target === "youtube-news"
    ) {
      target = "youtube";
    }

    if (
      target === "reviews" ||
      target === "tools"
    ) {
      target = "more";
    }

    showPage(target);

    history.pushState(
      null,
      "",
      "#" + target
    );
  });

});


/* =========================
   BROWSER BACK / FORWARD
========================= */

window.addEventListener("popstate", () => {

  const page = location.hash
    ? location.hash.substring(1)
    : "home";

  showPage(page);

});


/* =========================
   INITIAL PAGE
========================= */

const initialPage = location.hash
  ? location.hash.substring(1)
  : "home";

showPage(initialPage);


/* =========================
   SEARCH
========================= */

const search = document.getElementById("globalSearch");

if (search) {

  search.addEventListener("keydown", e => {

    if (e.key !== "Enter") return;

    const q = e.target.value
      .toLowerCase()
      .trim();

    if (!q) return;

    const found = [
      ...document.querySelectorAll("h2,h3")
    ].find(x =>
      x.textContent
        .toLowerCase()
        .includes(q)
    );

    if (found) {

      const parentSection =
        found.closest("section");

      if (parentSection) {

        let id = parentSection.id;

        if (id === "gamesPreview") {
          id = "games";
        }

        if (id === "creator" || id === "reviews") {
          id = "more";
        }

        if (
          id === "anime-apps" ||
          id === "anime-sites" ||
          id === "anime-news"
        ) {
          id = "anime";
        }

        if (
          id === "youtube-news" ||
          id === "tools"
        ) {
          id = "youtube";
        }

        showPage(id);

        history.pushState(
          null,
          "",
          "#" + id
        );
      }
    }

  });

}


/* =========================
   THEME BUTTON
========================= */

const themeBtn =
  document.getElementById("themeBtn");

if (themeBtn) {

  themeBtn.onclick = () => {

    document.body.classList.toggle("bright");

  };

}
