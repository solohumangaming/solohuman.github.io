const data = {
  games: [
    ["007 First Light", "ACTION • ADVENTURE", "007", "Official / authorized link"],
    ["Chained Together", "CO-OP • PLATFORMER", "CT", "Official / authorized link"],
    ["Valorant", "FPS • COMPETITIVE", "V", "Official Riot link"],
    ["Free Fire", "BATTLE ROYALE", "FF", "Official game link"]
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

function cards(items) {
  return items.map(x => `
    <article class="card">
      <div class="art">
        <span class="pill">${x[1]}</span>
        <b>${x[2]}</b>
      </div>

      <div class="body">
        <h3>${x[0]}</h3>
        <p>${x[3]}</p>

        <a class="download"
           href="#"
           onclick="return demo(event)">
           Open / Download
        </a>
      </div>
    </article>
  `).join("");
}


/* =========================
   LOAD CARDS
========================= */

const gamesGrid = document.getElementById("gamesGrid");
const softwareGrid = document.getElementById("softwareGrid");
const wallpaperGrid = document.getElementById("wallpaperGrid");

if (gamesGrid) {
  gamesGrid.innerHTML = cards(data.games);
}

if (softwareGrid) {
  softwareGrid.innerHTML = cards(data.software);
}

if (wallpaperGrid) {
  wallpaperGrid.innerHTML = cards(data.wallpapers);
}


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

    if (games) games.style.display = "";
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
