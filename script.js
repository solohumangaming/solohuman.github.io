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


/* =========================
   CARDS
========================= */

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

if (gamesGrid) gamesGrid.innerHTML = cards(data.games);
if (softwareGrid) softwareGrid.innerHTML = cards(data.software);
if (wallpaperGrid) wallpaperGrid.innerHTML = cards(data.wallpapers);


/* =========================
   DEMO BUTTON
========================= */

function demo(e) {
  e.preventDefault();

  alert(
    "Replace this button's # link with your official or legally shareable download URL."
  );

  return false;
}


/* =========================
   MAIN PAGE ELEMENTS
========================= */

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


/* =========================
   HIDE EVERYTHING
========================= */

function hideEverything() {

  if (hero) hero.style.display = "none";
  if (categories) categories.style.display = "none";

  if (games) games.style.display = "none";
  if (software) software.style.display = "none";
  if (wallpapers) wallpapers.style.display = "none";

  if (split) split.style.display = "none";
  if (creator) creator.style.display = "none";
  if (reviews) reviews.style.display = "none";
  if (more) more.style.display = "none";

  notices.forEach(section => {
    section.style.display = "none";
  });

  if (support) support.style.display = "none";
  if (discord) discord.style.display = "none";
}


/* =========================
   HOME
========================= */

function showHome() {

  hideEverything();

  if (hero) hero.style.display = "";
  if (categories) categories.style.display = "";

  if (games) games.style.display = "";
  if (software) software.style.display = "";
  if (wallpapers) wallpapers.style.display = "";

  if (split) split.style.display = "";
  if (creator) creator.style.display = "";
  if (reviews) reviews.style.display = "";
  if (more) more.style.display = "";

  notices.forEach(section => {
    section.style.display = "";
  });

  if (support) support.style.display = "";
  if (discord) discord.style.display = "";

  setActive("home");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   GAMES HUB
========================= */

function showGames() {

  hideEverything();

  if (games) games.style.display = "";

  setActive("games");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   SOFTWARE HUB
========================= */

function showSoftware() {

  hideEverything();

  if (software) software.style.display = "";

  setActive("software");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   WALLPAPER HUB
========================= */

function showWallpapers() {

  hideEverything();

  if (wallpapers) wallpapers.style.display = "";

  setActive("wallpapers");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   ANIME HUB
========================= */

function showAnime() {

  hideEverything();

  if (split) split.style.display = "";

  const animePanel = document.getElementById("anime");
  const youtubePanel = document.getElementById("youtube");

  if (animePanel) animePanel.style.display = "";
  if (youtubePanel) youtubePanel.style.display = "none";

  document.querySelectorAll(
    "#anime-apps, #anime-sites, #anime-news"
  ).forEach(section => {
    section.style.display = "";
  });

  setActive("anime");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   YOUTUBE HUB
========================= */

function showYouTube() {

  hideEverything();

  if (split) split.style.display = "";

  const animePanel = document.getElementById("anime");
  const youtubePanel = document.getElementById("youtube");

  if (animePanel) animePanel.style.display = "none";
  if (youtubePanel) youtubePanel.style.display = "";

  document.querySelectorAll(
    "#youtube-news, #tools"
  ).forEach(section => {
    section.style.display = "";
  });

  setActive("youtube");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   HELP
========================= */

function showHelp() {

  hideEverything();

  if (support) support.style.display = "";
  if (discord) discord.style.display = "";

  setActive("support");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   MORE HUB
========================= */

function showMore() {

  hideEverything();

  if (more) more.style.display = "";

  document.querySelectorAll("#tools").forEach(section => {
    section.style.display = "";
  });

  setActive("more");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   ACTIVE NAVBAR
========================= */

function setActive(page) {

  document.querySelectorAll(".nav nav a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === "#" + page) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

  });
}


/* =========================
   NAVBAR CLICK
========================= */

document.querySelectorAll(".nav nav a").forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const page = this.getAttribute("href").replace("#", "");

    if (page === "home") {
      showHome();
    }

    else if (page === "games") {
      showGames();
    }

    else if (page === "software") {
      showSoftware();
    }

    else if (page === "wallpapers") {
      showWallpapers();
    }

    else if (page === "anime") {
      showAnime();
    }

    else if (page === "youtube") {
      showYouTube();
    }

    else if (page === "support") {
      showHelp();
    }

    else if (page === "more") {
      showMore();
    }

    history.pushState(
      null,
      "",
      "#" + page
    );

  });

});


/* =========================
   BROWSER BACK / FORWARD
========================= */

window.addEventListener("popstate", function() {

  const page = location.hash
    ? location.hash.substring(1)
    : "home";

  openPage(page);

});


/* =========================
   OPEN PAGE
========================= */

function openPage(page) {

  if (page === "games") {
    showGames();
  }

  else if (page === "software") {
    showSoftware();
  }

  else if (page === "wallpapers") {
    showWallpapers();
  }

  else if (page === "anime") {
    showAnime();
  }

  else if (page === "youtube") {
    showYouTube();
  }

  else if (page === "support") {
    showHelp();
  }

  else if (page === "more") {
    showMore();
  }

  else {
    showHome();
  }

}


/* =========================
   CATEGORY BOXES
========================= */

document.querySelectorAll(".categories a").forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const target = this
      .getAttribute("href")
      .replace("#", "");

    if (target === "games") {
      showGames();
      history.pushState(null, "", "#games");
    }

    else if (target === "software") {
      showSoftware();
      history.pushState(null, "", "#software");
    }

    else if (target === "wallpapers") {
      showWallpapers();
      history.pushState(null, "", "#wallpapers");
    }

    else if (
      target === "anime" ||
      target === "anime-apps" ||
      target === "anime-sites" ||
      target === "anime-news"
    ) {
      showAnime();
      history.pushState(null, "", "#anime");
    }

    else if (
      target === "youtube" ||
      target === "creator" ||
      target === "youtube-news"
    ) {
      showYouTube();
      history.pushState(null, "", "#youtube");
    }

    else if (
      target === "more" ||
      target === "reviews" ||
      target === "tools"
    ) {
      showMore();
      history.pushState(null, "", "#more");
    }

  });

});


/* =========================
   SEARCH
========================= */

const search = document.getElementById("globalSearch");

if (search) {

  search.addEventListener("keydown", function(e) {

    if (e.key !== "Enter") return;

    const q = e.target.value
      .toLowerCase()
      .trim();

    if (!q) return;

    const headings = [
      ...document.querySelectorAll("h2, h3")
    ];

    const found = headings.find(x =>
      x.textContent
        .toLowerCase()
        .includes(q)
    );

    if (!found) {
      alert("Nothing found.");
      return;
    }

    const section = found.closest("section");

    if (!section) return;

    let page = section.id;

    if (
      page === "creator" ||
      page === "reviews" ||
      page === "tools"
    ) {
      page = "more";
    }

    if (
      page === "anime-apps" ||
      page === "anime-sites" ||
      page === "anime-news"
    ) {
      page = "anime";
    }

    if (page === "youtube-news") {
      page = "youtube";
    }

    openPage(page);

    history.pushState(
      null,
      "",
      "#" + page
    );

  });

}


/* =========================
   THEME
========================= */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

  themeBtn.onclick = function() {

    document.body.classList.toggle("bright");

  };

}


/* =========================
   START PAGE
========================= */

const startingPage = location.hash
  ? location.hash.substring(1)
  : "home";

openPage(startingPage);
