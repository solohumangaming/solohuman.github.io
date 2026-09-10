const data = {
  games: [
    [
      "007 First Light",
      "ACTION • ADVENTURE",
      "007",
      "Official game page",
      "https://www.007firstlightgame.com/"
    ],
    [
      "Chained Together",
      "CO-OP • PLATFORMER",
      "CT",
      "Official Steam page",
      "https://store.steampowered.com/app/2567870/Chained_Together/"
    ],
    [
      "Valorant",
      "FPS • COMPETITIVE",
      "V",
      "Official Riot Games page",
      "https://playvalorant.com/"
    ],
    [
      "Free Fire",
      "BATTLE ROYALE",
      "FF",
      "Official Garena page",
      "https://ff.garena.com/en/"
    ]
  ],

  software: [
    [
      "OBS Studio",
      "STREAMING",
      "OBS",
      "Official open-source download",
      "https://obsproject.com/"
    ],
    [
      "7-Zip",
      "FILE UTILITY",
      "7Z",
      "Official open-source download",
      "https://www.7-zip.org/"
    ],
    [
      "VLC Media Player",
      "MEDIA",
      "VLC",
      "Official VideoLAN download",
      "https://www.videolan.org/vlc/"
    ],
    [
      "ShareX",
      "SCREEN TOOLS",
      "SX",
      "Official open-source download",
      "https://getsharex.com/"
    ]
  ],

  wallpapers: [
    [
      "Gaming 4K",
      "PC • 4K",
      "4K",
      "Legal gaming wallpaper collection",
      "https://unsplash.com/s/photos/gaming-wallpaper"
    ],
    [
      "Anime Style",
      "ANIME • HD",
      "AN",
      "Anime-style wallpaper collection",
      "https://unsplash.com/s/photos/anime"
    ],
    [
      "Minimal Dark",
      "DESKTOP • HD",
      "MD",
      "Minimal dark wallpaper collection",
      "https://unsplash.com/s/photos/minimal-dark-wallpaper"
    ],
    [
      "Solo Human Style",
      "BRAND • 4K",
      "SH",
      "Red and dark gaming inspiration",
      "https://unsplash.com/s/photos/red-gaming"
    ]
  ]
};

function cards(items) {
  return items.map(item => `
    <article class="card">
      <div class="art">
        <span class="pill">${item[1]}</span>
        <b>${item[2]}</b>
      </div>
      <div class="body">
        <h3>${item[0]}</h3>
        <p>${item[3]}</p>
        <a
          class="download"
          href="${item[4]}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open / Download
        </a>
      </div>
    </article>
  `).join("");
}

document.getElementById("gamesGrid").innerHTML = cards(data.games);
document.getElementById("softwareGrid").innerHTML = cards(data.software);
document.getElementById("wallpaperGrid").innerHTML = cards(data.wallpapers);

function filterCategory(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const search = document.getElementById("globalSearch");

search.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    const query = event.target.value.toLowerCase();

    const found = [...document.querySelectorAll("h2, h3")]
      .find(element => element.textContent.toLowerCase().includes(query));

    if (found) {
      found.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }
});

document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("bright");
};
