const data={
games:[
["007 First Light","ACTION • ADVENTURE","007","Official / authorized link"],
["Chained Together","CO-OP • PLATFORMER","CT","Official / authorized link"],
["Valorant","FPS • COMPETITIVE","V","Official Riot link"],
["Free Fire","BATTLE ROYALE","FF","Official game link"]
],
software:[
["OBS Studio","STREAMING","OBS","Open-source / official"],
["7-Zip","FILE UTILITY","7Z","Open-source / official"],
["VLC Media Player","MEDIA","VLC","Open-source / official"],
["ShareX","SCREEN TOOLS","SX","Open-source / official"]
],
wallpapers:[
["Gaming 4K","PC • 4K","4K","Wallpaper collection"],
["Anime 4K","ANIME • 4K","AN","Wallpaper collection"],
["Minimal Dark","DESKTOP • HD","MD","Wallpaper collection"],
["Solo Human","BRAND • 4K","SH","Wallpaper collection"]
]};
function cards(items){
return items.map(x=>`<article class="card"><div class="art"><span class="pill">${x[1]}</span><b>${x[2]}</b></div><div class="body"><h3>${x[0]}</h3><p>${x[3]}</p><a class="download" href="#" onclick="return demo(event)">Open / Download</a></div></article>`).join("");
}
document.getElementById("gamesGrid").innerHTML=cards(data.games);
document.getElementById("softwareGrid").innerHTML=cards(data.software);
document.getElementById("wallpaperGrid").innerHTML=cards(data.wallpapers);
function demo(e){e.preventDefault();alert("Replace this button's # link with your official or legally shareable download URL.");return false;}
function filterCategory(id){document.getElementById(id).scrollIntoView({behavior:"smooth"});}
const search=document.getElementById("globalSearch");
search.addEventListener("keydown",e=>{if(e.key==="Enter"){const q=e.target.value.toLowerCase();const found=[...document.querySelectorAll("h2,h3")].find(x=>x.textContent.toLowerCase().includes(q));if(found)found.scrollIntoView({behavior:"smooth",block:"center"});}});
document.getElementById("themeBtn").onclick=()=>document.body.classList.toggle("bright");
