document.addEventListener("DOMContentLoaded",()=>{
const cards=[...document.querySelectorAll(".software-card")];
const count=document.getElementById("softwareResultCount");
let type="all",genre="all";
function render(){
 let n=0;
 cards.forEach(c=>{
  const show=(type==="all"||c.dataset.type===type)&&(genre==="all"||c.dataset.genre===genre);
  c.classList.toggle("soft-hidden",!show); if(show)n++;
 });
 count.textContent=n;
}
document.querySelectorAll(".soft-filter").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".soft-filter").forEach(x=>x.classList.remove("active"));
 btn.classList.add("active"); type=btn.dataset.type; render();
}));
document.querySelectorAll(".soft-genre").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".soft-genre").forEach(x=>x.classList.remove("active"));
 btn.classList.add("active"); genre=btn.dataset.genre; render();
}));
document.querySelectorAll(".soft-favorite").forEach(btn=>btn.addEventListener("click",()=>{
 btn.classList.toggle("saved"); btn.textContent=btn.classList.contains("saved")?"♥":"♡";
}));
render();
});