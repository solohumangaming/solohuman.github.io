
document.addEventListener("DOMContentLoaded",function(){
  const cards=[...document.querySelectorAll(".game-card")];
  const count=document.getElementById("gameResultCount");
  let type="all",genre="all";
  function render(){
    let n=0;
    cards.forEach(c=>{
      const ok=(type==="all"||c.dataset.type===type)&&(genre==="all"||c.dataset.genre===genre);
      c.classList.toggle("game-hidden",!ok);
      if(ok)n++;
    });
    count.textContent=n;
  }
  document.querySelectorAll(".game-filter").forEach(b=>b.addEventListener("click",()=>{
    document.querySelectorAll(".game-filter").forEach(x=>x.classList.remove("active"));
    b.classList.add("active"); type=b.dataset.type; render();
  }));
  document.querySelectorAll(".genre-filter").forEach(b=>b.addEventListener("click",()=>{
    document.querySelectorAll(".genre-filter").forEach(x=>x.classList.remove("active"));
    b.classList.add("active"); genre=b.dataset.genre; render();
  }));
  document.querySelectorAll(".favorite").forEach(b=>b.addEventListener("click",()=>{
    b.classList.toggle("saved"); b.textContent=b.classList.contains("saved")?"♥":"♡";
  }));
  render();
});
